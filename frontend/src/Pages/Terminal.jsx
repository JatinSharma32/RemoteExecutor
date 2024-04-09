import { useState } from "react";
import Axios from "axios";
import Editor from "@monaco-editor/react";
import FileUpload from "../components/FileUpload.jsx";

const Terminal = () => {
    const [code, setCode] = useState(
        "// Your code here\nconsole.log('Hello World!')"
    );
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    /**
     * SERVER ERROR: 2
     * CODE ERROR: 1
     * NO ERROR: 0
     */
    const [outputError, setOutputError] = useState(null);
    const [language, setLanguage] = useState("javascript");

    const handleSubmit = () => {
        Axios({
            url: "http://localhost:4000/executor/",
            method: "post",
            data: {
                code: code,
                input: input,
                language: language,
                user: { containerName: "jatin" },
            },
        })
            .then((data) => {
                if (data.data.error) {
                    setOutput("SERVER ERROR: " + data.data.codeError);
                    setOutputError("bg-red-200 border-red-500 text-red-600");
                } else {
                    console.log(data.data);
                    setOutput(data.data.output);
                    if (data.data.codeError) {
                        setOutputError(
                            "bg-orange-200 border-orange-700 text-red-600"
                        );
                    } else {
                        setOutputError(
                            "bg-green-200 border-green-700 text-black"
                        );
                    }
                }
            })
            .catch((err) => {
                console.log("Error occured: ", err);
            });
    };
    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };
    const handleInputChange = (newInput) => {
        setInput(newInput.target.value);
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
                className="rounded-md "
                defaultValue={code}
                theme="vs-dark"
                value={code}
                onChange={handleCodeChange}
                onMount={handleEditorMount}
            />
            <div className="flex my-10 justify-between items-end">
                <div className="flex-col flex mr-5">
                    <label htmlFor="input">Input:</label>
                    <textarea
                        className="bg-gray-100 border rounded-sm resize-none mt-2 p-4"
                        name="input"
                        id="input"
                        cols="30"
                        rows="10"
                        placeholder="Enter your input here..."
                        value={input}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="flex-col flex">
                    <label htmlFor="output">Output:</label>
                    <textarea
                        className={`${
                            outputError ?? "bg-gray-100"
                        } border rounded-sm resize-none mt-2 p-4`}
                        name="output"
                        id="output"
                        cols="80"
                        rows="10"
                        readOnly="false"
                        value={output}
                        placeholder="Submit your code..."
                    ></textarea>
                </div>
            </div>
            <button
                onClick={code ? handleSubmit : null}
                className="w-full mt-2 text-white bg-gradient-to-bl from-slate-500 to-slate-800 py-3 px-4 rounded-md"
            >
                Submit
            </button>
        </div>
    );
};
export default Terminal;
