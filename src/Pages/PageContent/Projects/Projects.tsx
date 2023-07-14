import cls from "./Projects.module.scss";

const Projects = () => {
    return (
        <>
            <div className={cls.ProjectSection}>
                <p className={cls.ProjectContext}>Projects</p>
            </div>
            <div className={cls.Projects}>
                <div className={cls.Child1}>
                    <div className={cls.Childs}>
                        <div className={cls.ChildContent}>Summer House</div>
                        <img className={cls.ChildImg} src="https://www.w3schools.com/w3images/house5.jpg" alt="" /></div>
                </div>
                <div className={cls.Child1}>
                    <div className={cls.Childs}>
                        <div className={cls.ChildContent}>Brick House</div>
                        <img className={cls.ChildImg} src="https://www.w3schools.com/w3images/house2.jpg" alt="" /></div>
                </div>
                <div className={cls.Child1}>
                    <div className={cls.Childs}>
                        <div className={cls.ChildContent}>Renovated</div>
                        <img className={cls.ChildImg} src="https://www.w3schools.com/w3images/house3.jpg" alt="" /></div>
                </div>
                <div className={cls.Child1}>
                    <div className={cls.Childs}>
                        <div className={cls.ChildContent}>Barn House</div>
                        <img className={cls.ChildImg} src="https://www.w3schools.com/w3images/house4.jpg" alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Projects;