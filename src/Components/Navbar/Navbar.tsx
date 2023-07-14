import cls from './Navbar.module.scss'
import { useState, useCallback } from 'react'
import { Drawer } from '@mui/material';

export const Navbar = () => {

    const [isOpenDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = useCallback(() => setOpenDrawer((prev) => !prev), [])

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
                <div className={cls.NavbarMenu}>
                    <img onClick={toggleDrawer} src='https://cdn-icons-png.flaticon.com/128/2976/2976215.png' alt='' />
                </div>
                <Drawer
                    anchor='right'
                    open={isOpenDrawer}
                    onClose={toggleDrawer}
                >
                        <a href='#Projects' className={cls.NavItem}>Projects</a>
                        <a href='#About' className={cls.NavItem}>About</a>
                        <a href='#Contact' className={cls.NavItem}>Contact</a>
                </Drawer>
            </div>
        </div>
    )
}