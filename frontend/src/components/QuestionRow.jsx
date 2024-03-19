import { Link } from "react-router-dom";

const Questions = ({ data, diffculity }) => {
    console.log(data);
    return (
        <tr className={data.index % 2 === 0 ? "bg-white" : "bg-slate-100"}>
            <td className="p-3 w-52">{data.index}.</td>
            <td className="p-3 w-1/2">
                <Link
                    to={`/problem/${data.index}`}
                    className="hover:text-blue-600"
                >
                    {data.title}
                </Link>
            </td>
            <td className="p-3 w-52">
                <a href={data.solution} target="_blank" rel="noreferrer">
                    <img
                        src="./Solution.png"
                        alt="Youtube link https://youtube.com"
                        className="w-14 "
                    />
                </a>
            </td>
            <td className={diffculity.color + " p-3 w-52"}>
                {diffculity.text}
            </td>

            <td className="p-3 w-52">{data.status}</td>
        </tr>
    );
};

export default Questions;
