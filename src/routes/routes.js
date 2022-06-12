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
import Quality from "../components/Quality";

const routes = [
  { index: true, path: "/", component: Dashboard },
  { index: false, path: route.category, component: CategoryListing },
  { index: false, path: route.about, component: About },
  { index: false, path: route.export, component: Export },
  { index: false, path: route.contact, component: Contact },
  { index: false, path: route.products, component: Products },
  { index: false, path: route.editProduct, component: EditProduct },
  { index: false, path: route.editCategory, component: EditCategoryListing },
  { index: false, path: route.packaging, component: PackingList },
  { index: false, path: route.login, component: Login },
  { index: false, path: route.quality, component: Quality },
];

export default routes;
