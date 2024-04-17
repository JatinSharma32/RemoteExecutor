import mongoose from "mongoose";
import { config } from "dotenv";
config();

const URI = process.env.URI;

export async function run() {
    try {
        await mongoose.connect(URI);
        mongoose.connection.once("open", () => {
            console.log("You successfully connected to MongoDB");
        });
    } catch (error) {
        console.log("DB Connnection Error: ", error);
    } finally {
        await mongoose.disconnect();
    }
}
