import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import cls from "./PageContent.module.scss";

const PageContent = () => {
    return (
        <div className={cls.PageContent}>
            <Projects />
            <About />
            <Contact />
            <div className={cls.ImgLocation}>
                <img src="https://www.w3schools.com/w3images/map.jpg" alt="" />
            </div>
        </div>
    )
}

export default PageContent;