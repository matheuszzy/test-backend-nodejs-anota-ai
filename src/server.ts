import { config } from "dotenv";
import expressRouter from "./infra/http/router";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import MongooseAdapter from "./infra/database/DatabaseConnection";

if (process.env.NODE_ENV === "development") {
  config();
}
const port = isNaN(Number(process.env.API_PORT))
  ? 8080
  : Number(process.env.API_PORT);

const app = new ExpressAdapter(expressRouter.router);


const uri = process.env.MONGODB_URI as string
new MongooseAdapter(uri)

app.listen(port);
