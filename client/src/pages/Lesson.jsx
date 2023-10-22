import Button from "../components/Button";
const Lesson = () => {
    return (
        <div className="">
         <div className="page-container">
    
            <div className="headliner-container">
                <h1>LESSONS</h1>
            </div>
            <div className="lesson-button">
                <Button to="/Lesson1"> PUBERTY & REPRODUCTION </Button>
                <Button to="/Lesson2"> INTRODUCTION </Button>
            </div>
        </div>
     </div>

    )
}

export default Lesson;