import mongoose from "mongoose";

export interface DatabaseConnection {
  connect(): Promise<void>;
}

export default class MongooseAdapter {
  connect: any;
  constructor(uri: string) {
    this.connect = mongoose.connect(uri).then(() => {
      console.log("Connected to the database.");
    });
  }

  static close() {
    mongoose.connection.close()
  }
}
