import { useState } from "react";
const Lesson2 = () => {
    const [selectedTab, setSelectedTab] = useState("condoms");
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="container">
            <div className="headliner-container">
                <h1>LESSON 2: PUBERTY & REPRODUCTIVE SYSTEM</h1>
                <h3> What students need to know </h3>
            </div>
            <div className="content-container">
                <nav className="lesson-nav">
                <div
                    onClick={() => handleTabClick("condoms")}
                    className={`nav-header info-nav-content ${selectedTab === "condoms" ? "active-tab" : "inactive-tab"}`}
                >
                    Things about Condoms
                </div>
                <div
                    onClick={() => handleTabClick("contraception")}
                    className={`nav-header info-nav-content ${selectedTab === "contraception" ? "active-tab" : "inactive-tab"}`}
                    
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

export default Lesson2;