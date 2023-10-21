import { Link } from "react-router-dom";
const Button = ({children, ...props}) => {
    const { to } = props;
    return (
        <Link to={to} className="button-container">
            <button>
                { children }
            </button>
        </Link>
    )
}

export default Button;