import { Router } from "express";
import { singUp } from "../services/auth/singUp.controller";
import { singIn } from "../services/auth/signIn.controller";
import { authRefresh } from "../services/auth/auth.refresh.tsx";

const authUserRoute = Router();

authUserRoute.post("/signUp", singUp);
authUserRoute.post("/signIn", singIn);
authUserRoute.get("/refresh", authRefresh);

export default authUserRoute;
