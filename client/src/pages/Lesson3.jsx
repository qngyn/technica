import { useState } from "react";
const Lesson3 = () => {
    const [selectedTab, setSelectedTab] = useState("puberty-basics");
    const handleTabClick = (tab) => {
        
        setSelectedTab(tab);
    };

    return (
        <div className="container">
            <div className="headliner-container">
                <h1>LESSON 3: HIV & STIs </h1>
                <h3> Making Sense of Being Safe </h3>
            </div>
            <div className="content-container">
                <nav className="lesson-nav">
                <div
                    onClick={() => handleTabClick("condoms")}
                >
                    Things about Condoms
                </div>
                <div
                    onClick={() => handleTabClick("contraception")}
                >
                    Contraception Options
                </div>
                </nav>
                {selectedTab === "puberty-basics" && (
                    <div className="body-body">
                        <div className="body-header">
                            The important things to teach about condoms
                        </div>
                        <div className="body-content">
                            <div className="body-content-div">
                                <p>

                                </p>
                            </div> 

                            <div className="body-content-div">
                                <p>

                                </p>
                            </div> 

                        </div>
                    </div>
                )}
                {selectedTab === "sex-info" && (
                    <div className="body-body">
                        <div className="body-header">
                            The important things to teach about contraception
                        </div>
                        <div className="body-content">
                            <div className="body-content-div">
                                <p>

                                </p>
                            </div> 

                            <div className="body-content-div">
                                <p>

                                </p>
                            </div> 
                    </div>
                        
                </div>
                )}
            </div>
        </div>
    )
}

export default Lesson3;