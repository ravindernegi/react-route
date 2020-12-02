import Home from './Home';
import About from './About';
import Contact from './Contact';


const routes = [
    {
        exact: true,
        path:"/",
        component:Home
    },
    {
        exact: true,
        path:"/about",
        component:About
    },
    {
        exact: true,
        path:"/contact",
        component:Contact
    }
];

export default routes;