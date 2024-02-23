import ExpressRouter from "./ExpressRouterAdapter";

const expressRouter = new ExpressRouter();

expressRouter.register("get", "/", (_params: any, _body: any) => {
  return "Hello World";
});

export default expressRouter;
