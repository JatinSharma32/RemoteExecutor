import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;
app.set(express.json({ limit: "512KB" }));

app.listen(PORT, () => {
    console.log("Server started at port ", PORT);
});
