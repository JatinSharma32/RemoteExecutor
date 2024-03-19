import { useParams, Link } from "react-router-dom";

const problemData = [
    {
        title: "Add Two Numbers",
        description: {
            paragraphs: [
                "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
                "You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
            ],
            images: [],
            examples: [
                {
                    images: [
                        "https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg",
                    ],
                    input: "l1 = [2,4,3], l2 = [5,6,4]",
                    output: "[7, 0, 8]",
                    explanation: "342 + 465 = 807",
                },
                {
                    images: [],
                    input: "l1 = [0], l2 = [0]",
                    output: "[0]",
                    explanation: "",
                },
                {
                    images: [],
                    input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
                    output: "[8,9,9,9,0,0,0,1]",
                    explanation: "",
                },
            ],
            constraints: [
                "The number of nodes in each linked list is in the range [1, 100]",
                "0 <= Node.val <= 9",
                "It is guaranteed that the list represents a number that does not have leading zeros.",
            ],
        },
    },
];

const Problem = () => {
    const { id } = useParams();
    return (
        <>
            {problemData &&
                problemData.map((singleProblem, x) => {
                    return (
                        <div
                            key={x}
                            className="w-full flex flex-col justify-evenly my-5"
                        >
                            <div className="text-2xl font-semibold mb-4">
                                {id}. {singleProblem.title}
                            </div>
                            <div className="mb-8">
                                {singleProblem.description.paragraphs.length >
                                    0 &&
                                    singleProblem.description.paragraphs.map(
                                        (item, i) => {
                                            return (
                                                <p key={i} className="mb-4">
                                                    {item}
                                                </p>
                                            );
                                        }
                                    )}
                                {singleProblem.description.images.length > 0 &&
                                    singleProblem.description.images.map(
                                        (item, i) => {
                                            return (
                                                <img
                                                    className="mb-2"
                                                    src={item}
                                                    key={i}
                                                    alt="Problem helping Image"
                                                />
                                            );
                                        }
                                    )}
                            </div>
                            <div className="mb-8">
                                {singleProblem.description.examples.length >
                                    0 &&
                                    singleProblem.description.examples.map(
                                        (item, i) => {
                                            return (
                                                <div key={i} className="mb-4">
                                                    <h3 className="mb-4">
                                                        <b>Example {i + 1}:</b>
                                                    </h3>
                                                    {item.images.length > 0 &&
                                                        item.images.map(
                                                            (images, j) => {
                                                                return (
                                                                    <img
                                                                        className="mb-4"
                                                                        key={j}
                                                                        src={
                                                                            images
                                                                        }
                                                                        alt="Example helping Image"
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                    <div className="px-5 border-l-2 border-gray-200">
                                                        <h3>
                                                            <b className="mr-2">
                                                                Input:{" "}
                                                            </b>
                                                            <span className=" font-light text-gray-600 ">
                                                                {item.input}
                                                            </span>
                                                        </h3>
                                                        <h3>
                                                            <b className="mr-2">
                                                                Output:{" "}
                                                            </b>
                                                            <span className=" font-light text-gray-600 ">
                                                                {item.output}
                                                            </span>
                                                        </h3>
                                                        {item.explanation ? (
                                                            <h3>
                                                                <b className="mr-2">
                                                                    Explanation:{" "}
                                                                </b>
                                                                <span className=" font-light text-gray-600 ">
                                                                    {
                                                                        item.explanation
                                                                    }
                                                                </span>
                                                            </h3>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                            </div>

                            {singleProblem.description.constraints.length >
                                0 && (
                                <div className="mb-4">
                                    <h3 className="mb-4">
                                        <b>Constraints:</b>
                                    </h3>
                                    <ul className="list-disc list-inside">
                                        {singleProblem.description.constraints.map(
                                            (item, i) => {
                                                return (
                                                    <li
                                                        key={i}
                                                        className="mb-2"
                                                    >
                                                        {item}
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                            )}
                            <Link
                                to="/terminal"
                                className="my-5 w-fit mx-auto text-white bg-gradient-to-bl from-slate-500 to-slate-800 py-3 px-12 rounded-md"
                            >
                                Solve
                            </Link>
                        </div>
                    );
                })}
        </>
    );
};

export default Problem;
