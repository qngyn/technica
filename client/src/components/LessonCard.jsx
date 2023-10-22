
const LessonCard = ({children, ...props}) => {
    const { title, description } = props;
    return (
        <div className="lesson-card">
            <h3 className="lesson-name"> {title} </h3>
            <h5 className="lesson-description"> {description} </h5>
        </div>
    )
}

export default LessonCard;