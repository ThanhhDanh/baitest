//Layouts
import Home from '../pages/Home';
import Introduce from '../pages/Introduce';
import { config } from './routes';

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.introduce, component: Introduce },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
