import { FC, ReactNode } from 'react'
import cls from './Layout.module.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import PageContent from '../../Pages/PageContent/PageContent'

interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <div className={cls.child}>
                <Header />
                <PageContent />
                <Footer />
            </div>
        </>
    )
}