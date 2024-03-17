import { useParams } from "react-router-dom";

const Problem = () => {
    const { id } = useParams();
    return <div>Problem {id}</div>;
};

export default Problem;
