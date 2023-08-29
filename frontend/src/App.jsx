import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Practise from "./Pages/Practise";
import LogIn from "./Pages/LogIn";
import SignIn from "./Pages/SignIn";

function App() {
    return (
        <>
            <Navbar />
            <main className="px-24 py-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="blogs" element={<Blog />} />
                    <Route path="practise" element={<Practise />} />
                    <Route path="login" element={<LogIn />} />
                    <Route path="signin" element={<SignIn />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
