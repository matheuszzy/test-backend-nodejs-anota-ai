import express, { Request, Response } from "express";

export interface HttpRouter {
  register(method: string, url: string, callback: Function): void;
}

export default class ExpressRouter implements HttpRouter {
  router: any;
  constructor() {
    this.router = express.Router();
  }

 register(method: string, url: string, callback: Function): void {
    this.router[method](url, async function (req: Request, res: Response) {
      try {
        const output = await callback(req.params, req.body);
        res.json(output);
      } 
      catch (err: any) {
        return res.status(422).json({
          message: err.message,
        });
      }
    });
  }

}
