import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Event: ", e);
    };

    return (
        <div className="h-full flex flex-col justify-evenly items-center w-2/5 mx-auto  shadow-md px-10 py-8 bg-gray-50 rounded-md">
            <div className="flex flex-col items-center">
                <img src="/Design.png" className="w-20" alt="Logo" />
                <h3 className="mt-2 text-lg font-medium san">
                    Remote Executer
                </h3>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-full my-2">
                <span>
                    <input
                        type="text"
                        name="Username"
                        value={username}
                        placeholder="Username"
                        className="w-full my-2 py-3 px-4 rounded-md font-extralight border-x border-y"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </span>
                <span>
                    <input
                        type="text"
                        name="Email"
                        value={email}
                        placeholder="E-mail address"
                        className="w-full my-2 py-3 px-4 rounded-md font-extralight border-x border-y"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </span>
                <span>
                    <input
                        type="text"
                        name="Password"
                        value={password}
                        placeholder="Password"
                        className="w-full my-2 py-3 px-4 rounded-md font-extralight border-x border-y"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </span>
                <span>
                    <button className="w-full my-2 text-white bg-gradient-to-bl from-slate-500 to-slate-800 py-3 px-4 rounded-md">
                        Sign Up
                    </button>
                </span>
            </form>
            <div>
                <p className="text-sm text-gray-400 font-light">
                    Have an account?
                    <Link to="/login" className="text-blue-900 text-base ml-1">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default SignUp;
