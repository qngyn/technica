import { Link } from "react-router-dom";
const LessonCard = ({children, ...props}) => {
    const { title, description, link } = props;
    return (
        <div className="lesson-card">
            <h3 className="lesson-name"> 
                <Link to={link}> {title}  </Link>
            </h3>
            <h5 className="lesson-description"> {description} </h5>
        </div>
    )
}

export default LessonCard;