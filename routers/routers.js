import { Router } from "express";
const routers = new Router();

import {questionRouter} from "./questionRouter.js";
import {farmaRouter} from "./farnaRouter.js";
import {recipeRouter} from "./recipeRouter.js";

routers.use("/", questionRouter);
routers.use("/", farmaRouter);
routers.use("/", recipeRouter);

export { routers };