import { Router } from "express";
import authenticate from "../../../middlewares/auth.middleware";
import { healthcheck } from "../controllers/user.controller";

const router = Router();

router.route("/health-check").get(authenticate, healthcheck);

export default router;
