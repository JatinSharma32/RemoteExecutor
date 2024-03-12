import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import Practise from "./routes/practise.route.js";

const app = express();
const PORT = process.env.PORT || 4000;
app.set(express.json({ limit: "512KB" }));

// Update cors allowed origins for PROD env
app.use(cors());

app.use("/practise", Practise);

app.listen(PORT, () => {
    console.log("Server started at port ", PORT);
});
