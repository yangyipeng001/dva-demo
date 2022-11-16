import dynamic from "dva/dynamic";
import { app } from "../index";

export const ExamplePageDynamic = dynamic({
  app,
  models: () => [import("../models/example")],
  component: () => import("../routes/ExamplePage"),
});
