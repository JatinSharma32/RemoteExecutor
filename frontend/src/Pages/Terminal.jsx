import { useState } from "react";
import Axios from "axios";
import Editor from "@monaco-editor/react";
import FileUpload from "../components/FileUpload.jsx";

const Terminal = () => {
    const [code, setCode] = useState(
        "// Your code here\nconsole.log('Hello World!')"
    );
    const [language, setLanguage] = useState("javascript");

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
    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };
    const handleEditorMount = (editor) => {
        console.log("Editor mounted");
        editor.focus();
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <select
                    name="language"
                    id="selectLanguage"
                    defaultValue="javascript"
                    onChange={handleLanguageChange}
                    className="p-3 m-2 my-5 w-40 rounded-full bg-slate-100 "
                >
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                    <option value="python">Python</option>
                </select>
                <FileUpload
                    setCode={setCode}
                    setLanguage={setLanguage}
                ></FileUpload>
            </div>
            <Editor
                height="80vh"
                width="100%"
                language={language}
                className="rounded-md"
                defaultValue={code}
                theme="vs-dark"
                value={code}
                onChange={handleCodeChange}
                onMount={handleEditorMount}
            />
            <button
                onClick={handleSubmit}
                className="w-full mt-6 text-white bg-gradient-to-bl from-slate-500 to-slate-800 py-3 px-4 rounded-md"
            >
                Submit
            </button>
        </div>
    );
};
export default Terminal;
