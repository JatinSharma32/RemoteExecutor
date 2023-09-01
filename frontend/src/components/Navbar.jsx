import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="border-b border-b-slate-200 h-fit w-full px-24 shadow-sm flex items-center flex-initial flex-shrink-0">
            <Link to="/" className="mr-8">
                <img src="/Design.png" className="w-8 rounded-sm" />
            </Link>
            <ul className="h-fit flex items-center">
                <NavBarTitle to="/blogs">Blogs</NavBarTitle>
                <NavBarTitle to="/practise">Practise</NavBarTitle>
            </ul>
        </div>
    );
};

const NavBarTitle = ({ to, children }) => {
    const path = useResolvedPath(to);
    const styles = useMatch({ path: path.pathname })
        ? "h-fit py-2 px-2 mx-4 border-b-2 border-black"
        : "h-fit py-2 px-2 mx-4 border-b-2 border-white";
    return (
        <li className={styles}>
            <Link to={to}>{children}</Link>
        </li>
    );
};
export default Navbar;
