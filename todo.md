## Tasks

-   [x] Course Page
-   [x] Course Cards
-   [x] Problem Page
-   [ ] Teriminal Page
-   [ ] User Authentication
-   [ ] Responsiveness (OPTIONAL)

## Where I left last time:

-   Designed the functionality of code execution move forward with it

---

-   Research this `exec()` method for executing various file codes and read [Remote Ex Code](https://github.com/Tushar3099/Remote-Executor/blob/main/rce-server/server/api/services/code.service.js).
    ```js
    import { exec } from "child_process";
    exec("cd backend && npm run dev", function (error, stdout, stderr) {
        console.log("stdout: " + stdout);
        console.log("stderr: " + stderr);
        if (error !== null) {
            console.log("exec error: " + error);
        }
    });
    ```
-   Next start with the [Terminal page](https://blog.logrocket.com/build-web-editor-with-react-monaco-editor/#monaco-editor) and Fix the minor bugs in UI and
-   User Authentication, add token checking on Main.jsx so user automatically gets logged in.
-   Improve the backend architecture
-   If issues faced while working with Text editor, we can ask user to upload their code files.
-   Solve the Multiple Request Error, multiple unwanted automatic requests to the routes.
