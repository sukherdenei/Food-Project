import { Router } from "express";
import { singUp } from "../services/auth/singUp.controller";
import { singIn } from "../services/auth/signIn.controller";
import { authRefresh } from "../services/auth/auth.refresh.tsx";
import { forgetPassword } from "../services/auth/forget.password";
import { resetPassword } from "../services/auth/reset-password";

const authUserRoute = Router();

authUserRoute.post("/signUp", singUp);
authUserRoute.post("/signIn", singIn);
authUserRoute.get("/refresh", authRefresh);
authUserRoute.post("/reset-password-request", forgetPassword);
authUserRoute.post("/forget-password", resetPassword);

export default authUserRoute;
