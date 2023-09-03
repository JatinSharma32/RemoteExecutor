import Courses from "../components/Courses";

const Home = () => {
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
            <div className="flex my-6 py-6 items-center justify-between flex-wrap">
                {[...Array(20).keys()].map((item) => {
                    return <Courses key={item} />;
                })}
            </div>
        </>
    );
};
export default Home;
