import { useState } from "react";
const Lesson1 = () => {
    const [selectedTab, setSelectedTab] = useState("puberty-basics");
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="container">
            <div className="headliner-container">
                <h1>LESSON 1: PUBERTY & REPRODUCTIVE SYSTEM</h1>
                <h3> What students need to know </h3>
            </div>
            <div className="content-container">
                <nav className="lesson-nav">
                <div
                    onClick={() => handleTabClick("puberty-basics")}
                    className={`nav-header info-nav-content ${selectedTab === "puberty-basics" ? "active-tab" : "inactive-tab"}`}
                >
                    Puberty Basics
                </div>
                <div
                    onClick={() => handleTabClick("pregnancy-basics")}
                    className={`nav-header info-nav-content ${selectedTab === "pregnancy-basics" ? "active-tab" : "inactive-tab"}`}
                >
                    Pregnancy Basics
                </div>
                <div
                    onClick={() => handleTabClick("sex-info")}
                    className={`nav-header info-nav-content ${selectedTab === "sex-info" ? "active-tab" : "inactive-tab"}`}
                >
                    What is sex?
                </div>
                </nav>
                {selectedTab === "puberty-basics" && (
                    <div className="body-body">
                        <div className="body-header">
                            The important things to know about changing bodies 
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
                {selectedTab === "pregnancy-basics" && (
                    <div className="body-body">
                        <div className="body-header">
                            The important things to know about how pregnancy happens
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
                            What IS and IS NOT sexual intercourse?
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

export default Lesson1;