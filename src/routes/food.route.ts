import { Router } from "express";
import {
  deleteFood,
  getFoodById,
  getFoods,
  updateFood,
} from "../services/food.controller";

const foodRoute = Router();

foodRoute
  .get("/:foodId", getFoodById)
  .get("/", getFoods)
  .put("/:foodId", updateFood)
  .delete("/:foodId", deleteFood);

export { foodRoute };
