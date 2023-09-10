import express from "express";
const router = express.Router();
import { QuestionsList } from "../controllers/practise.controller.js";

router.route("/").get(QuestionsList);

export default router;
