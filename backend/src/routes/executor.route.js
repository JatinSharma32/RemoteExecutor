import { Router } from "express";
import { codeReciver } from "../controllers/executor.controller.js";

const router = Router();

router.route("/").post(codeReciver);

export default router;
