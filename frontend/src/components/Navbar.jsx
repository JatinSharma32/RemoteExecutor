import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="border-b border-b-slate-200 h-fit w-full px-24 shadow-sm flex justify-between items-center flex-initial flex-shrink-0 ">
            <div className=" h-fit flex items-center flex-initial flex-shrink-0 ">
                <Link to="/" className="mr-8">
                    <img src="/Design.png" className="w-7 rounded-sm" />
                </Link>
                <ul className="h-fit flex items-center">
                    <NavBarTitle to="/">Explore</NavBarTitle>
                    <NavBarTitle to="/practise?size=10&pageSet=0">
                        Practise
                    </NavBarTitle>
                    <NavBarTitle to="/blogs">Blogs</NavBarTitle>
                    <NavBarTitle to="/hkjks">Contest</NavBarTitle>
                    <NavBarTitle to="/ghiukn">Discuss</NavBarTitle>
                    <NavBarTitle to="/bhjgtuik">
                        <DropDownList>Interview</DropDownList>
                    </NavBarTitle>
                    <NavBarTitle to="/hknkjs">
                        <DropDownList color={"pro"}>Store</DropDownList>
                    </NavBarTitle>
                </ul>
            </div>
            <div className=" flex items-center text-sm text-gray-500 h-full">
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
                    to="/pre"
                    className=" align-baseline  text-amber-500  hover:bg-orange-100 rounded-lg mx-1 ml-2 px-3 h-4/6 font-medium bg-orange-50 flex items-center"
                >
                    Premium
                </Link>
            </div>
        </div>
    );
};

const DropDownList = ({ color, children }) => {
    return (
        <div className="flex items-center">
            {color ? (
                <font className="text-amber-500">{children}</font>
            ) : (
                <font>{children}</font>
            )}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="currentColor"
                className={
                    color
                        ? "ml-1 h-[14px] w-[14px] text-amber-500 relative"
                        : "ml-1 h-[14px] w-[14px] text-inherit relative"
                }
                aria-hidden="true"
            >
                <path
                    fillRule="evenodd"
                    d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                    clipRule="evenodd"
                ></path>
            </svg>
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
