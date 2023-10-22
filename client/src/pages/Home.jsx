import Button from "../components/Button";
const Home = () => {
    return (
       <div className="">

        <div className="page-container">
                <h1 className="headliner-content"> Destigmatize Sex Ed </h1>

            <div className="homepage-button">
                <Button to="/lesson"> LET'S LEARN </Button>
                <Button to="/introduction"> INTRODUCTION </Button>
            </div>
        </div>
           
  </div>
    )
}

export default Home;