import { useState } from "react";
const Lesson1 = () => {
    const [selectedTab, setSelectedTab] = useState("puberty-basics");
    const handleTabClick = (tab) => {
        
        setSelectedTab(tab);
    };

    return (
        <div className="container">
            <div className="Class 1">
                <h1>LESSON 1: PUBERTY & REPRODUCTIVE SYSTEM</h1>
                <h3> What students need to know </h3>
            </div>
            <div className="Puberty & Reproduction System">
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
                            Puberty is a time of big change and it can be exciting and consfusing for adolescents. As an educator, it is your job to help students understand what is happening with their bodies and relationships.
                            People's bodies grow in all kinds of ways that are normal. Make sure your students know that while there are typical changes people with different bodies experience there is a whole range of normal 
                            </p>
                        </div>
                    </div>
                )}
                {selectedTab === "pregnancy-basics" && (
                    <div className="body-body">
                        <div className="body-header">
                            The important things to know about how pregnany happens
                        </div>
                        <div className="body-content">
                            <p>
                                In sex ed class, the most important take away for students about the reproductive anatomy is how infection is spread and how pregnancy happens.
                                In this section. we will focus on what can cause pregnancy only.

                                Ejaculatory Fluid and Pregnancy
                                Ejaculatory fluid consists of sprem, semen, and fluid from the prostate. When a person ejaculates, it comes out of the penis. Parts of the reproductive tract produce, carry, and release ejaculatory fluid. Ejaculatory fluid can cause a pregrnancy when the sperm meets and fertilizes an egg.
                            </p>
                        </div>
                    </div>
                )}
                {selectedTab === "sex-info" && (
                    <div className="body-body">
                    <div className="body-header">
                        Missing header
                    </div>
                    <div className="body-content">
                        <p>
                        Some poeple have different opinions about what qualifies as sex. It's critical that when we talk about people having or not having sex, students know what wwe mean. This is important becuase of what it means for pregnancy an infection. 
                            For example, people have different thoughts about anal sex. Even though it doesn't cause pregnancy, it can be a way to spread STIs and HIV. 
                        </p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Lesson1;