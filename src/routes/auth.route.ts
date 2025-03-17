import { Router } from "express";
import { singUp } from "../services/auth/singUp.controller";
import { singIn } from "../services/auth/signIn.controller";

const authUserRoute = Router();

authUserRoute.post("/signUp", singUp);
authUserRoute.post("/signIn", singIn);

export default authUserRoute;
