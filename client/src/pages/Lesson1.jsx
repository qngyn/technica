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
                >
                    Puberty Basics
                </div>
                <div
                    onClick={() => handleTabClick("pregnancy-basics")}
                >
                    Pregnancy Basics
                </div>
                <div
                    onClick={() => handleTabClick("sex-info")}
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
                            <p>
                                
                            </p>
                        </div>
                    </div>
                )}
                {selectedTab === "pregnancy-basics" && (
                    <div className="body-body">
                            
                    </div>
                )}
                {selectedTab === "sex-info" && (
                    <div className="body-body">
                    </div>
                )}
            </div>
        </div>
    )
}

export default Lesson1;