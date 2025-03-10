import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../services/user.controller";

const userRoute = Router();

userRoute
  .post("/sign-up", createUser)
  .get("/", getUsers)
  .delete("/userId", deleteUser)
  .put("/", updateUser);

export { userRoute };
