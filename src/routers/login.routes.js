import { Router } from "express";
import userLoginController from "../controllers/userLogin.controller";
import verifyLoginMiddleware from "../middlewares/verifyLogin.middleware";

const router = Router()

router.post("", verifyLoginMiddleware, userLoginController)

export default router