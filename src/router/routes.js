import HomePage from "../pages/home/HomePage";
import AboutPage from '../pages/about/AboutPage';
import DemoPage from '../pages/demo/DemoPage';


const routes = [
  {
    name: 'HomePage',
    component: HomePage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'DemoPage',
    component: DemoPage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'AboutPage',
    component: AboutPage,
    options: {
      header: () => null,
    }
  },


];

export default routes;
