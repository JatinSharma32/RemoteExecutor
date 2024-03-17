// import { useParams } from "react-router-dom";
const paragraphData = [
    "This is a data structures and algorithms (DSA) course with a strong focus on passing coding interviews for software engineering jobs.",
    "Most DSA courses - including those offered in universities, tend to concentrate on theoretical concepts that don't matter in an interview. Most of the time, these courses present zero or few examples of problems you would see in an interview.",
    "This course takes a very pragmatic approach to teaching DSA. The course is primarily taught through examples - it includes hundreds of carefully curated problems that show up in actual interviews. These examples are delivered through a balanced mix of walkthroughs and exercises. You will learn by doing.",
    "Everything you need to pass coding interviews is here in one place. We will not dwell on theoretical details or waste time on concepts that won't help you pass an interview. The goal of this course is to get you a job, not pass an exam.",
    "Regardless of your initial skill level, you should be comfortable with preparing for and passing coding interviews at tech companies after taking this course. If your target is top-tier companies like FAANG, taking this course will set you up with all the fundamentals necessary to prepare for those interviews.",
    `The course is split up into 13 chapters. The bulk of the content is within chapters 2 - 11, each of which focuses on a data structure or algorithm - Arrays and strings - Hashmaps and sets - Linked lists - Stacks and queues - Trees and graphs - Heaps - Greedy algorithms - Binary search - Backtracking - Dynamic programming`,
];

const CoursePage = () => {
    // const params = useParams();
    // this can be used to take course ID from URL
    return (
        <div>
            <div
                className="w-full bg-cover bg-center h-60 rounded-lg text-white p-4 flex items-center justify-center shadow-lg"
                style={{ backgroundImage: `url('/Courses/1.png')` }}
            >
                <div className="font-medium drop-shadow-lg  text-4xl h-full flex items-center max-w-3xl ">
                    Data Structures and Algorithms
                </div>
            </div>
            <div className="w-full flex p-8 flex-auto flex-shrink-0 bottom-20 px-16 justify-between ">
                <div className="w-1/3 mr-12 flex-initial flex-shrink-0  ">
                    <img
                        src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/d088d7e56c12.jpg"
                        alt="course thumbnail"
                        className="shadow-lg rounded-md"
                    />
                    <a
                        className="mt-5 relative  flex items-center justify-center h-20 w-20 rounded-full p-2 bottom-16 left-6 text-white italic text-lg animate-pulse"
                        href="https://www.youtube.com/watch?v=FpfHmAkRVK4"
                        style={{
                            backgroundImage:
                                "linear-gradient(45deg, #01021a,#edebf2 )",

                            backgroundSize: "600% 600%",
                            animation: "Gradient 2s ease infinite",
                        }}
                    >
                        Watch
                    </a>

                    <style>{`
                        @keyframes Gradient {
                            0% {
                                background-position: 0% 50%;
                            }
                            50% {
                                background-position: 100% 50%;
                            }
                            100% {
                                background-position: 0% 50%;
                            }
                        }
                    `}</style>
                </div>
                <div className="flex  flex-col flex-auto ">
                    <h2 className="text-4xl py-2 ">Introduction</h2>
                    {paragraphData &&
                        paragraphData.map((item, key) => {
                            return (
                                <p className="py-2" key={key}>
                                    {item}
                                </p>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
export default CoursePage;
