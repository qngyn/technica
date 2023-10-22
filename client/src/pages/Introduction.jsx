import Card from "../components/Card";
import sexEd from "../data/sexed";
const Introduction = () => {
    const cards  = sexEd.map((card) => {
        return (
            <Card question={card.question} answer={card.answer} />
        )
    })

    return (
        <div className="container">
            <div className="headliner-container">
                <h1 className="headliner"> INTRODUCTION TO SEX EDUCATION </h1>
            </div>
            <div className="content-container">
                {cards}
            </div>
        </div>
    )
}

export default Introduction;