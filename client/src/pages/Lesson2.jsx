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
                {selectedTab === "tewaching-about-condoms" && (
                    <div className="body-body">
                        <div className="body-header">
                            The important things to teach about condoms
                        </div>
                        <div className="body-content">
                            <div className="body-content-div">
                                <p>
                                Internal and external condoms are great ways people to protect themselves against preganancy and STIs/HIV
                                But condoms only work well if used correctly every time during sex
                                This section focuses on the need-to-know information about using internal and external condoms. 
                                </p>
                            </div> 

                            <div className="body-content-div">
                                <p>
                                When used correcly everytime a person has sex, condoms help prevent STIs, HIV, and pregnancy.
                                When people use condoms, typically they are less effective than when they are used perfectly.
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
                                There are many contraceptive options avaiable. Some are more effective than others, and choices can depend on people's bodies and lifestyles.

                                This section focues on the need-to-know information about selecting and using contraception
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