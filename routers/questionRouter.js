import Router from "express";
import { questionController } from "../controllers/questionController.js";
import { BASIC_URL, ID_URL } from "../utils/consts.js";
const questionRouter = new Router();

questionRouter.post(BASIC_URL, questionController.create);
questionRouter.delete(ID_URL, questionController.delete);
questionRouter.put(ID_URL, questionController.update);
questionRouter.get(BASIC_URL, questionController.getAll);

export { questionRouter };
