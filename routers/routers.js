import { Router } from "express";
const routers = new Router();

import {questionRouter} from "./questionRouter.js";
import {farmaRouter} from "./farnaRouter.js";
import {recipeRouter} from "./recipeRouter.js";
import {anatRouter} from "./anatRouter.js";
import {patRouter} from "./patRouter.js";

routers.use("/", questionRouter);
routers.use("/", farmaRouter);
routers.use("/", recipeRouter);
routers.use("/", anatRouter);
routers.use("/", patRouter);

export { routers };