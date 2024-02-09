import { Link } from "react-router-dom";

const FilterButton = ({ size, children }) => {
    return (
        <Link
            to={`?page=${size}`}
            className="text-sm font-light text-black bg-slate-100 py-2 px-4 mx-2 cursor-pointer rounded-3xl"
        >
            {children}
        </Link>
    );
};

export default FilterButton;
