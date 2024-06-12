import { ApiError } from "../errors/apiError.js";
import { Question } from "../models/models.js";

class QuestionController {
  async create(req, res, next) {
    try {
      const { title, answer } = req.body;
      const question = await Question.create({
        title,
        answer,
      });
      return res.json(question);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const questions = await Question.findAll();
    return res.json(questions);
  }

  async delete(req, res) {
    const { id } = req.params;
    const questionDelete = await Question.destroy({ where: { id } });
    return res.json(questionDelete);
  }
}

const questionController = new QuestionController();

export { questionController };
