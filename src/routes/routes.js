import Dashboard from "../pages/dashboard";
import AboutPage from "../pages/about";
import { route } from "../common/constants";

const routes = [
  { path: "/", component: Dashboard },
  { path: route.about, component: AboutPage },
];

export default routes;
