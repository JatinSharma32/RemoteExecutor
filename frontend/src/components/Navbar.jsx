import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="border-b border-b-slate-200 h-fit px-24 py-2 shadow-md">
            <ul className="h-fit flex items-center">
                <li className="h-fit">
                    <Link to={`/`}>
                        <img src="/Design.png" className="w-8 rounded-sm" />
                    </Link>
                </li>

                <li className="h-fit">
                    <Link to={`practise`}>Practise</Link>
                </li>
                <li className="h-fit">
                    <Link to={`blogs`}>Blogs</Link>
                </li>
                <li className="h-fit">
                    <Link to={`signin`}>Sign In</Link>
                </li>
                <li className="h-fit">
                    <Link to={`login`}>Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
