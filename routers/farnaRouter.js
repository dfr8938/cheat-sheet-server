import { Router } from "express";
const farmaRouter = new Router();

import { farmaController } from "../controllers/farmaController.js";
import {FARMA_URL, ID_URL} from "../utils/consts.js";

farmaRouter.post(FARMA_URL, farmaController.create);
farmaRouter.delete(`${FARMA_URL}${ID_URL}`, farmaController.delete);
farmaRouter.get(`${FARMA_URL}`, farmaController.getAll);

export { farmaRouter };