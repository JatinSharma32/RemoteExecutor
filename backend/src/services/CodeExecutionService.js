import { createError } from "../utils/errorHandler.js";
import { exec } from "child_process";
import { Buffer } from "buffer";

// we will get the code from controller, which will pass it to argument
/**
 *                          CONTAINER STARTUP PHASE
 * We will run/start the container in this phase.
 *
 *                          FILE CREATION PHASE
 * Then we will make a code and a input file directly into container
 * how we will store them by using echo command and also we wll convert them into base64 first
 *
 *                          CODE EXECUTION PHASE
 * Then we will execute the code with using '<' operator to pass input in code.
 *
 *                          CLEANUP PHASE
 * Here we'll stop and remove the container.
 *
 * Do this step in any error state
 *
 */

class ExecutionService {
    codeFileName;
    codeExecution_CMD;
    containerStartUp = async (user) => {
        return new Promise((resolve, reject) => {
            exec(
                `docker start ${user.containerName}`,
                (error, stdout, stderr) => {
                    if (error) {
                        reject(createError("Container creation error", 500));
                    } else {
                        resolve(true);
                    }
                }
            );
        });
    };
    fileCreation = async (user, fileCreation_CMD) => {
        return new Promise((resolve, reject) => {
            exec(
                `docker exec ${user.containerName} sh -c "${fileCreation_CMD}"`,
                (error, stdout, stderr) => {
                    if (error) {
                        reject("Code file creation error");
                    } else {
                        resolve(true);
                    }
                }
            );
        });
    };
    codeExecution = async (user) => {
        return new Promise((resolve, reject) => {
            exec(
                `docker exec ${user.containerName} sh -c "${this.codeExecution_CMD}"`,
                (error, stdout, stderr) => {
                    if (error) {
                        resolve({ codeError: true, output: stderr });
                    } else {
                        resolve({ codeError: false, output: stdout });
                    }
                }
            );
        });
    };
    containerStop = async (user) => {
        return new Promise((resolve, reject) => {
            exec(
                `docker stop ${user.containerName}`,
                (error, stdout, stderr) => {
                    if (error) {
                        console.log(
                            "Container Not Stopped [FAILURE]: ",
                            stderr
                        );
                    } else {
                        console.log("Container Stopped [SUCCESS]: ", stdout);
                    }
                    resolve();
                }
            );
        });
    };
    exe = async (code, input, language, user) => {
        const containerStartUpExecution = await this.containerStartUp(user);
        if (containerStartUpExecution) {
            try {
                const fileCreation_CMD = this.fileCreationCommand(
                    code,
                    input,
                    language
                );
                const fileCreationExecution = await this.fileCreation(
                    user,
                    fileCreation_CMD
                );
                if (fileCreationExecution) {
                    const codeExecutionStatus = await this.codeExecution(user);
                    await this.containerStop(user);
                    return codeExecutionStatus;
                }
            } catch (error) {
                await this.containerStop(user);
                throw createError(error, 500);
            }
        }
    };
    fileCreationCommand = (code, input, language) => {
        const base64Code = Buffer.from(code).toString("base64");
        const base64Input = Buffer.from(input).toString("base64");
        switch (language) {
            case "python":
                this.codeFileName = `code.py`;
                this.codeExecution_CMD = `cd home && python code.py <input.txt && rm *`;
                break;
            case "cpp":
                this.codeFileName = `code.cpp`;
                this.codeExecution_CMD = `cd home && g++ code.cpp -o useroutputfile && ./useroutputfile <input.txt && rm *`;
                break;

            default:
                this.codeFileName = `code.js`;
                this.codeExecution_CMD = `cd home && node code.js <input.txt && rm *`;
                break;
        }
        return `cd home && echo '${base64Code}' | base64 -d > ${this.codeFileName} && echo '${base64Input}' | base64 -d > input.txt`;
    };
}

export const Executor = new ExecutionService();
