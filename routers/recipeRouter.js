import { Router } from "express";
const recipeRouter = new Router();

import { recipeController } from "../controllers/recipeController.js";
import {RECIPE_URL, ID_URL} from "../utils/consts.js";

recipeRouter.post(RECIPE_URL, recipeController.create);
recipeRouter.delete(`${RECIPE_URL}${ID_URL}`, recipeController.delete);
recipeRouter.get(`${RECIPE_URL}`, recipeController.getAll);

export { recipeRouter };