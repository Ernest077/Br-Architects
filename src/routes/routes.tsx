import About from "../Pages/PageContent/About/About";
import Contact from "../Pages/PageContent/Contact/Contact";
import Projects from "../Pages/PageContent/Projects/Projects";


export const Routes = [
    {
        path: '/projects',
        element: <Projects/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contact',
        element: <Contact/>
    }
]