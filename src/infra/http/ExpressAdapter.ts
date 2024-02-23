import express from "express";

export interface HttpServer {
  listen(port: number): void;
}

export default class ExpressAdapter implements HttpServer {
  app: any;

  constructor(router: any) {
    this.app = express();
    this.app.use(express.json());
    this.app.use("/api/v1", router)
  }

  listen(port: number): void {
    this.app.listen(port, () => console.log(`Server running on port ${port}`));
  }
}
