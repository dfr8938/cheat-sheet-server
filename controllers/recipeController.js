import { ApiError } from "../errors/apiError.js";
import { Recipe } from "../models/models.js";

class RecipeController {
    async create (req, res, next) {
        try {
            const { title, description, fg, fd, pp, pd } = req.body;
            const recipe = await Recipe.create({
                title, description, fg, fd, pp, pd
            });
            return res.json(recipe);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll (req, res, next) {
        try {
            const recipes = await Recipe.findAll();
            return res.json(recipes);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete (req, res, next) {
        try {
            const { id } = req.params;
            const recipeDelete = await Recipe.destroy({ where: { id } });
            return res.json(recipeDelete);
        } catch (e) {
            next(ApiError.badRequest(e.method));
        }
    }
}

const recipeController = new RecipeController();

export { recipeController };