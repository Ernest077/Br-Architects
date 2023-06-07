import cls from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <div className={cls.Navbar}>
            <div className={cls.NavDiv}>
                <a href='#home' className={cls.NavItem}>
                    <b>BR</b>
                    Architects
                </a>
                <div className={cls.NavChild}>
                    <a href='#Projects' className={cls.NavItem}>Projects</a>
                    <a href='#About' className={cls.NavItem}>About</a>
                    <a href='#Contact' className={cls.NavItem}>Contact</a>
                </div>
            </div>
        </div>
    )
}