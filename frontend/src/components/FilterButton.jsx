const FilterButton = ({ size, children }) => {
    return (
        <a
            className="text-sm font-light text-black bg-slate-100 py-2 px-4 mx-2 cursor-pointer rounded-3xl"
            href={`?page=${size}`}
        >
            {children}
        </a>
    );
};

export default FilterButton;
