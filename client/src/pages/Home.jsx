import Button from "../components/Button";
const Home = () => {
    return (
        <div className="">
            <div className="home-content">
                <h1>APP NAME</h1>
            </div>
            <div className="home-button">
                <Button to="/lesson"> LET'S LEARN </Button>
                <Button to="/introduction"> INTRODUCTION </Button>
            </div>
        </div>
    )
}

export default Home;