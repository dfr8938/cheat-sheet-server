import { Router } from "express";
import {anatController} from "../controllers/anatController.js";
const anatRouter = new Router();

anatRouter.post("/anat", anatController.create);
anatRouter.delete("/anat/:id", anatController.delete);
anatRouter.put("/anat/:id", anatController.update);
anatRouter.get("/anat", anatController.getAll);

export { anatRouter };