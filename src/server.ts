import { config } from "dotenv";
import expressRouter from "./infra/http/router";
import ExpressAdapter from "./infra/http/ExpressAdapter";

if (process.env.NODE_ENV === "development") {
  config();
}
const port = isNaN(Number(process.env.API_PORT))
  ? 8080
  : Number(process.env.API_PORT);

const app = new ExpressAdapter(expressRouter.router);

app.listen(port);
