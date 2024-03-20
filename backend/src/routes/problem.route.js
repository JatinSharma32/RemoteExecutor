import express from "express";
import { ProblemDataByID } from "./../controllers/problem.controller.js";

const router = express.Router();

router.route("/:id").get(ProblemDataByID);

export default router;
