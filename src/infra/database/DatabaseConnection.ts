import mongoose from "mongoose";

export interface DatabaseConnection {
  connect(): Promise<void>;
}

export default class MongooseAdapter {
  connect: any;
  constructor() {
    this.connect = mongoose
      .connect(process.env.MONGODB_URI as string)
      .then(() => {
        console.log("Connected to the database.")
      });
  }
}
