import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import Practise from "./routes/practise.route.js";
import { run } from "./connections/connection.js";
import Problem from "./routes/problem.route.js";
import { RegisterRouter, LoginRouter } from "./routes/authentication.route.js";
import Course from "./routes/course.route.js";
import Executor from "./routes/executor.route.js";

const app = express();
const PORT = process.env.PORT || 4000;
export const URI = process.env.URI;

// Update cors allowed origins for PROD env
run();
app.use(express.json());
app.use(cors());

app.use("/practise", Practise);
app.use("/problem", Problem);
app.use("/course", Course);
app.use("/executor", Executor);
app.use("/signup", RegisterRouter);
app.use("/login", LoginRouter);

app.listen(PORT, () => {
    console.log("Server started at port ", PORT);
});
