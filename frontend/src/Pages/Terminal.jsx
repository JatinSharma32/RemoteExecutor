import { useState } from "react";
import Axios from "axios";
import Editor from "@monaco-editor/react";

const Terminal = () => {
    const [code, setCode] = useState("");

    const handleSubmit = () => {
        console.log(code);
        Axios({
            url: "http://localhost:4000/executor/",
            method: "post",
            data: { code: code },
        })
            .then((data) => {
                console.log("Data sent: ", data);
            })
            .catch((err) => {
                console.log("Error occured: ", err);
            });
    };
    const handleEditorMount = (editor) => {
        console.log("Editor mounted");
        editor.focus();
    };

    return (
        <div>
            <Editor
                height="70vh"
                width="100%"
                className="rounded-md"
                defaultLanguage="javascript"
                defaultValue={`// Your code here\n// console.log('Hello World!')`}
                theme="vs-dark"
                value={code}
                onChange={(newCode) => {
                    setCode(newCode);
                }}
                onMount={handleEditorMount}
            />
            <button
                onClick={handleSubmit}
                className="w-full my-2 text-white bg-gradient-to-bl from-slate-500 to-slate-800 py-3 px-4 rounded-md"
            >
                Submit
            </button>
        </div>
    );
};
export default Terminal;
