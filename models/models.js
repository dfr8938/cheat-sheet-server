import { sequelize } from "../utils/db.js";
import { DataTypes } from "sequelize";

const Question = sequelize.define("question", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  answer: { type: DataTypes.STRING, allowNull: false },
});

export { Question };
