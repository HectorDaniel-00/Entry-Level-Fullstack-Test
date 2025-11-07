import Router from "express";
import { authenticate } from "../middleware/auth-middleware";
import { search } from "../services/users.service";

const router = Router();

router.get("/profile", authenticate, search);

export default router;
