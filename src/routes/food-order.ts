import express, { Router } from "express";
import {
  createFood,
  deleteFood,
  getFoodById,
  getFoods,
  updateFood,
} from "../services/food.controller";

const foodOrderRoute = express.Router();

foodOrderRoute.post("/", createFood);
foodOrderRoute.get("/:foodId", getFoodById);
foodOrderRoute.get("/", getFoods);
foodOrderRoute.put("/:footCategoryId", updateFood);
foodOrderRoute.delete("/:foodId", deleteFood);

export default foodOrderRoute;
