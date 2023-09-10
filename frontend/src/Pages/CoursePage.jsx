import { useParams } from "react-router-dom";
const CoursePage = () => {
    const params = useParams();
    return (
        <div>
            <div>
                <h2>Course {params.id}</h2>
            </div>
        </div>
    );
};
export default CoursePage;
