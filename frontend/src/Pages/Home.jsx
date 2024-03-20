import { useLocation } from "react-router-dom";
import Courses from "../components/Courses";
import { useEffect, useState } from "react";
import Axios from "axios";

const Home = () => {
    const [courseData, setCourseData] = useState(null);
    const { hash } = useLocation();

    useEffect(() => {
        if (hash === "#explore") {
            document.getElementById("explore").scrollIntoView();
        }
    }, [hash]);

    useEffect(() => {
        // complete it
        Axios({ url });
    }, []);

    return (
        <>
            <div className="w-full h-min flex  items-center bg-gradient-to-br justify-center rounded-3xl drop-shadow-2xl from-slate-600 to-slate-950 p-14 text-gray-200 overflow-hidden">
                <img
                    src="./Design.png"
                    alt="Remote executer Logo"
                    className="w-48 p-4 logoBounce"
                />
                <div className="flex flex-col flex-shrink-0 items-center text-center m-4 px-8 w-2/4">
                    <h2 className="text-3xl text-gray-50 py-2">
                        A New Way to Learn
                    </h2>
                    <p className="py-2 text-gray-400">
                        Remote Executer is the best platform to help you enhance
                        your skills, expand your knowledge and prepare for
                        technical interviews.
                    </p>
                </div>
            </div>
            {/* The component below could be improved using sliding gallary */}
            <div
                id="explore"
                className="flex my-2 py-2 items-center justify-between flex-wrap"
            >
                {[...Array(21).keys()].map((item) => {
                    return <Courses key={item} url={item} />;
                })}
            </div>
        </>
    );
};
export default Home;
