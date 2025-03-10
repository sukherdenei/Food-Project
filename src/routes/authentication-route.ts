import { Router } from "express";
import {
  createAuthSign,
  createSignUp,
  getAuthentication,
} from "../services/authentication";

const authenticationRoute = Router();

authenticationRoute
  .get("/", getAuthentication)
  .post("/sign-in", createAuthSign)
  .post("/sign-up", createSignUp);

export { authenticationRoute };
