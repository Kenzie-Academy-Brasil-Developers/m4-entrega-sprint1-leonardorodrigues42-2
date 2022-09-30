import { Router } from "express";

import createUserController from "../controllers/createUsers.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import showProfileUserController from "../controllers/showProfileUser.controller";
import updateUserController from "../controllers/updateUser.controller";

import verifyAuthAdminTokenMiddleware from "../middlewares/verifyAuthAdminToken.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken";
import verifyEmailMiddleware from "../middlewares/verifyEmailAvailability.middleware"

const router = Router()

router.post("", verifyEmailMiddleware, createUserController)
router.get("", verifyAuthAdminTokenMiddleware, listUsersController)
router.get("/profile", verifyAuthTokenMiddleware, showProfileUserController)
router.patch("/:uuid", verifyAuthTokenMiddleware, updateUserController)
router.delete("/:uuid", verifyAuthTokenMiddleware, deleteUserController)

export default router