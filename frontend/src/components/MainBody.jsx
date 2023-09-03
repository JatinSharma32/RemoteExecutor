import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Practise from "../Pages/Practise";
import LogIn from "../Pages/LogIn";
import SignIn from "../Pages/SignIn";
import PageNotFound from "../Pages/PageNotFound";
import CoursePage from "../Pages/CoursePage";

const MainBody = () => {
    return (
        <main className="px-24 py-3 w-full flex flex-col flex-auto flex-shrink-0 h-fit overflow-x-hidden">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blogs" element={<Blog />} />
                <Route path="practise" element={<Practise />} />
                <Route path="login" element={<LogIn />} />
                <Route path="signup" element={<SignIn />} />
                <Route path="pagenotfound" element={<PageNotFound />} />
                <Route path="course/:id" element={<CoursePage />} />
                <Route
                    path="*"
                    element={<Navigate to={"pagenotfound"} replace />}
                />
            </Routes>
        </main>
    );
};
export default MainBody;
