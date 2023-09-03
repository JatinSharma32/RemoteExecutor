import { useParams } from "react-router-dom";
const CoursePage = () => {
    const params = useParams();
    console.log(params);
    return <div>Hello</div>;
};
export default CoursePage;
