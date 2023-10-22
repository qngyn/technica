import { useState } from "react";
const Card = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {question, answer} = props
    return (
        <div className="card-container">
            <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
                {question} <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="faq-answer">{ answer }</div>}
        </div>
    )
}

export default Card;