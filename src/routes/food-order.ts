import express, { Router } from "express";
import {
  createFood,
  deleteFood,
  getFoodById,
  updateFood,
} from "../services/food.controller";

const foodOrderRoute = express.Router();

foodOrderRoute.post("/", createFood);
foodOrderRoute.get("/", getFoodById);
foodOrderRoute.put("/:footCategoryId", updateFood);
foodOrderRoute.delete("/:footCategoryId", deleteFood);

export default foodOrderRoute;
