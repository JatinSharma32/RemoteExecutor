import mongoose from "mongoose";
import { URI } from "../index.js";

export async function run() {
    try {
        console.log("flag1");
        await mongoose.connect(URI);
        console.log("flag2");
        mongoose.connection.once("open", () => {
            console.log("You successfully connected to MongoDB");
        });
    } catch (error) {
        console.log("DB Connnection Error: ", error);
    }
}
