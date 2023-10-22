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
                    onClick={() => handleTabClick("sti-basics")}
                    className={`nav-header info-nav-content ${selectedTab === "sti-basics" ? "active-tab" : "inactive-tab"}`}
                >
                    STI Basics
                </div>
                <div
                    onClick={() => handleTabClick("hiv-basics")}
                    className={`nav-header info-nav-content ${selectedTab === "hiv-basics" ? "active-tab" : "inactive-tab"}`}
                >
                    HIV & AIDS
                </div>
                </nav>
                {selectedTab === "sti-basics" && (
                    <div className="body-body">
                        <div className="body-header">
                            STI Basics: What you need to know about STIs
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
                {selectedTab === "hiv-basics" && (
                    <div className="body-body">
                        <div className="body-header">
                            Making sense of HIV and AIDS
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