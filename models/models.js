import { sequelize } from "../utils/db.js";
import { DataTypes } from "sequelize";

const Question = sequelize.define("question", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.TEXT, allowNull: false },
  answer: { type: DataTypes.TEXT, allowNull: false },
});

const Lock = sequelize.define("lock", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  locked: { type: DataTypes.BOOLEAN, default: false }
});

const FarmaQuestion = sequelize.define("farma_question", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING(500), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  pd: { type: DataTypes.TEXT, allowNull: false },
  lp: { type: DataTypes.TEXT, allowNull: false },
  md: { type: DataTypes.TEXT, allowNull: false },
  fe: { type: DataTypes.TEXT, allowNull: false },
  pp: { type: DataTypes.TEXT, allowNull: false },
  pe: { type: DataTypes.TEXT, allowNull: false },
});

const Recipe = sequelize.define("recipe", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING(500), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  fg: { type: DataTypes.TEXT, allowNull: false },
  fd: { type: DataTypes.TEXT, allowNull: false },
  pp: { type: DataTypes.TEXT, allowNull: false },
  pd: { type: DataTypes.TEXT, allowNull: false },
});


export { Question, Lock, FarmaQuestion, Recipe };
