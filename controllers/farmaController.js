import { ApiError } from "../errors/apiError.js";
import {FarmaQuestion, Question} from "../models/models.js";

class FarmaController {
    async create (req, res, next) {
        try {
            const { title, description, pd, lp, md, fe, pp, pe } = req.body;
            const question = await FarmaQuestion.create({
                title, description, pd, lp, md, fe, pp, pe
            });
            return res.json(question);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll (req, res, next) {
        try {
            const questions = await FarmaQuestion.findAll();
            return res.json(questions);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete (req, res, next) {
        try {
            const { id } = req.params;
            const questionDelete = await FarmaQuestion.destroy({ where: { id } });
            return res.json(questionDelete);
        } catch (e) {
            next(ApiError.badRequest(e.method));
        }
    }
}

const farmaController = new FarmaController();

export { farmaController };