//Layouts
import Create from '../pages/Create';
import Edit from '../pages/Edit';
import Home from '../pages/Home';
import { config } from './routes';

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.edit, component: Edit },
    { path: config.routes.create, component: Create },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
