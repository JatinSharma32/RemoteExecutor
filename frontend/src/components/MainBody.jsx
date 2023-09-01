import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Practise from "../Pages/Practise";
import LogIn from "../Pages/LogIn";
import SignIn from "../Pages/SignIn";
import PageNotFound from "../Pages/PageNotFound";

const MainBody = () => {
    return (
        <main className="px-24 py-3 w-full flex flex-col flex-auto h-fit overflow-scroll">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blogs" element={<Blog />} />
                <Route path="practise" element={<Practise />} />
                <Route path="login" element={<LogIn />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </main>
    );
};
export default MainBody;
