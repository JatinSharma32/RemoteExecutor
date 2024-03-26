import { createError, errorHandler } from "../utils/errorHandler.js";
import { exec } from "child_process";
import { writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const codeReciver = async (req, res, next) => {
    try {
        const { code } = req.body;
        await codeExecutor(code);
        res.end();
    } catch (error) {
        errorHandler(res, error);
    }
};

const codeExecutor = async (code) => {
    try {
        //writing code in file
        const fileName = "jatin.js";
        await writeFile(
            path.join(
                fileURLToPath(import.meta.url),
                "..",
                "..",
                "..",
                "..",
                "UserCodeFiles",
                fileName
            ),
            code
        );

        //executing the file
        exec(`cd ../UserCodeFiles && node ${fileName}`, (err, stdout) => {
            if (err) {
                throw err;
            }
            console.log("Output: ", stdout);
        });
    } catch (error) {
        throw createError(error.message, 500);
    }
};
