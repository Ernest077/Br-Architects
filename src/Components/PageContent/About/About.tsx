import cls from "./About.module.scss";

const About = () => {
    return(
        <>
        <div className={cls.AboutSection}>
                <p className={cls.ProjectContext}>About</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className={cls.AboutPerson}>
                <div className={cls.AboutPersonChild}>
                    <img className={cls.ABImg} src="https://www.w3schools.com/w3images/team2.jpg" alt="" />
                    <h3>John Deo</h3>
                    <p className={cls.ABp}>CEO & Founder</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p>
                        <button className={cls.AboutButton}>Contact</button>
                    </p>
                </div>
                <div className={cls.AboutPersonChild}>
                    <img className={cls.ABImg} src="https://www.w3schools.com/w3images/team1.jpg" alt="" />
                    <h3>Jane Doe</h3>
                    <p className={cls.ABp}>Architect</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p>
                        <button className={cls.AboutButton}>Contact</button>
                    </p>
                </div>
                <div className={cls.AboutPersonChild}>
                    <img className={cls.ABImg} src="https://www.w3schools.com/w3images/team3.jpg" alt="" />
                    <h3>Mike Ross</h3>
                    <p className={cls.ABp}>Architect</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p>
                        <button className={cls.AboutButton}>Contact</button>
                    </p>
                </div>
                <div className={cls.AboutPersonChild}>
                    <img className={cls.ABImg} src="https://www.w3schools.com/w3images/team4.jpg" alt="" />
                    <h3>Dan Star</h3>
                    <p className={cls.ABp}>Architect</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p>
                        <button className={cls.AboutButton}>Contact</button>
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;