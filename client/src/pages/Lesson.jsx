import LessonCard from "../components/LessonCard";
const Lesson = () => {
    return (
        <div className="container">
            <div className="headliner-container">
                <h1>
                    LESSONS
                </h1>
            </div>
            <div className="">
                <LessonCard
                    title="Puberty & the Reproductive System"
                    description="This unit covers learning pointers about teaching about puberty and reproduction.."
                    link="/lesson1"
                />
                <LessonCard
                    title="Preventing Pregnancy & Infection: The Basics of Keeping Safe "
                    description="This unit covers learning about condoms and contraception when teaching sexual health education, HIV/STI prevention, and/or family life education."
                    link="/lesson2"
                />
                <LessonCard
                    title="HIV & STIs: Making Sense of Being Safe"
                    description="This unit covers learning about HIV and STIs (sexually transmitted infections) when teaching sexual health education, HIV/STI prevention, and/or family life education. Understanding how HIV and STIs are spread is critical information for students to learn. It can also be a challenging topic to understand and teach about."
                    link="/lesson3"
                />

            </div>
        </div>
    )
}

export default Lesson;