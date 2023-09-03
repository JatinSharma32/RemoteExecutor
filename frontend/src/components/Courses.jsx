import { Link } from "react-router-dom";
const CourseColorCombinations = [
    { light: "from-amber-100", dark: "to-red-500" },
    { light: "from-yellow-100", dark: "to-green-400" },
    { light: "from-blue-50", dark: "to-blue-400" },
    { light: "from-yellow-100", dark: "to-amber-400" },
];
const Courses = ({ url }) => {
    const bgColors =
        CourseColorCombinations[
            Math.floor(Math.random() * CourseColorCombinations.length)
        ];
    console.log(bgColors);
    const style = `py-4 my-6 rounded-2xl flex items-center shadow-md justify-center w-80 h-72 bg-gradient-to-br ${bgColors?.light} ${bgColors?.dark} hover:shadow-xl overflow-hidden`;
    return (
        <div className="overflow-hidden max-h-96 p-7">
            <div className={style}>
                <div className="w-full  text-center flex h-24 bg-white relative items-start justify-evenly shadow-inner top-28">
                    <div className="p-2">
                        <h3 className="text-2xl font-semibold">
                            {Math.ceil(Math.random() * 20)}
                        </h3>
                        <p className="text-sm text-gray-500 font-light">
                            Chapters
                        </p>
                    </div>
                    <div className="p-2">
                        <h3 className="text-2xl font-semibold">
                            {Math.ceil(Math.random() * 200)}
                        </h3>
                        <p className="text-sm text-gray-500 font-light">
                            Items
                        </p>
                    </div>
                    <div className="p-2 relative top-7">
                        <h3 className=" text-gray-500">
                            {Math.ceil(Math.random() * 100)}%
                        </h3>
                    </div>
                </div>
            </div>
            <Link
                to={`/course/${url}`}
                className="h-16 rounded-full w-16 bg-white border-4 border-slate-300 flex items-center drop-shadow-xl justify-center cursor-pointer  hover:scale-105 bottom-36 left-56 relative z-10"
            ></Link>
        </div>
    );
};

export default Courses;
