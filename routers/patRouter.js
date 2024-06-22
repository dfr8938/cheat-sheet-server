import { Router } from "express";
import {patController} from "../controllers/patController.js";
const patRouter = new Router();

patRouter.post("/pat", patController.create);
patRouter.delete("/pat/:id", patController.delete);
patRouter.put("/pat/:id", patController.update);
patRouter.get("/pat", patController.getAll);

export { patRouter };