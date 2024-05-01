import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useAuth } from "../contexts/authContext.jsx";

const Navbar = () => {
    const { username } = useAuth();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(username, user);
    return (
        <div className="border-b border-b-slate-200 h-fit w-full px-24 shadow-sm flex justify-between items-center flex-initial flex-shrink-0 ">
            <div className=" h-fit flex items-center flex-initial flex-shrink-0 ">
                <Link to="/" className="mr-8">
                    <img src="/Design.png" className="w-7 rounded-sm" />
                </Link>
                <ul className="h-fit flex items-center">
                    <NavBarTitle to="/#explore">Explore</NavBarTitle>
                    <NavBarTitle to="/practise?size=10&pageSet=0">
                        Practise
                    </NavBarTitle>
                </ul>
            </div>
            <div className=" flex items-center text-sm text-gray-500 h-full">
                {(username || user?.username) && (
                    <p className="py-2 px-4 bg-green-100 mr-10 rounded-md">
                        Logged in as {username || user?.username}
                    </p>
                )}
                <Link
                    to="/signup"
                    className="hover:text-black mx-1 px-1 font-light"
                >
                    Register
                </Link>
                <p className=" mx-1 px-1 font-light">or </p>
                <Link
                    to="/login"
                    className="hover:text-black mx-1 px-1 font-light"
                >
                    Sign in
                </Link>
                <Link
                    to="/terminal"
                    className=" align-baseline  text-amber-500  hover:bg-orange-100 rounded-lg mx-1 ml-2 px-3 h-4/6 font-medium bg-orange-50 flex items-center"
                >
                    Code
                </Link>
            </div>
        </div>
    );
};

const NavBarTitle = ({ to, children }) => {
    const path = useResolvedPath(to);
    const styles = useMatch({ path: path.pathname })
        ? "h-fit py-3 px-1 mx-2 border-b-2 border-black text-black text-base font-light font-semibold"
        : "h-fit py-3 px-1 mx-2 border-b-2 border-white text-gray-500 hover:text-black text-base font-light";
    return (
        <li className={styles}>
            <Link to={to}>{children}</Link>
        </li>
    );
};
export default Navbar;
