import { Link } from "react-router-dom";
const CourseColorCombinations = [
    { light: "from-amber-100", dark: "to-red-500" },
    { light: "from-yellow-100", dark: "to-green-400" },
    { light: "from-blue-50", dark: "to-blue-400" },
    { light: "from-yellow-100", dark: "to-amber-400" },
];
const Courses = () => {
    const bgColors =
        CourseColorCombinations[
            Math.floor(Math.random() * CourseColorCombinations.length)
        ];
    console.log(bgColors);
    const style = `p-4 my-6 rounded-2xl flex items-center shadow-xl justify-center w-80 h-72 bg-gradient-to-br ${bgColors?.light} ${bgColors?.dark}  overflow-hidden`;
    return (
        <div className="overflow-hidden p-5">
            <div className={style}></div>
            <Link className="h-16 rounded-full w-16 bg-white border-4 border-slate-300 flex items-center justify-center cursor-pointer  hover:scale-110 bottom-16 left-3/4 relative z-10 "></Link>
        </div>
    );
};

export default Courses;
