import { Router } from "express";
import {
  deleteFood,
  getFoodById,
  updateFood,
} from "../services/food.controller";

const foodRoute = Router();

foodRoute
  .get("/:foodId", getFoodById)
  .put("/:foodId", updateFood)
  .delete("/:foodId", deleteFood);

export { foodRoute };
