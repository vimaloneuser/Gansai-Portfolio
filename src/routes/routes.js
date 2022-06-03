import Dashboard from "../pages/dashboard";
import { route } from "../common/constants";
import Products from "../components/Products";
import About from "../components/About";
import Export from "../components/Export";
import Contact from "../components/Contact";
import CategoryListing from "../components/Products/Category";
import EditProduct from "../components/EditProducts";
import Login from "../components/login";
import EditCategoryListing from "../components/EditProducts/EditCategoryList";
import PackingList from "../components/PackingList";

const routes = [
  { path: "/", component: Dashboard },
  { path: route.category, component: CategoryListing },
  { path: route.about, component: About },
  { path: route.export, component: Export },
  { path: route.contact, component: Contact },
  { path: route.products, component: Products },
  { path: route.editProduct, component: EditProduct },
  { path: route.editCategory, component: EditCategoryListing },
  { path: route.packaging, component: PackingList },
  { path: route.login, component: Login },
];

export default routes;
