import Home from './home'
import Product from './product'
import Catalogue from './catalogue'
import AboutUs from './aboutUs'
import ContactUs from './contactUs'
import ProductDescription from './productDescription'
import CatalogueDescription from './catalogueDescription'
import CategoryPage from './categoryPage'
import * as Layouts from 'layouts'

const routes = [
  {
    path: '/home',
    Component: Home,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/product',
    Component: Product,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/catalogue',
    Component: Catalogue,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/aboutUs',
    Component: AboutUs,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/contactUs',
    Component: ContactUs,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/product/:id',
    Component: ProductDescription,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/catalogue/:id',
    Component: CatalogueDescription,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/category/:category',
    Component: CategoryPage,
    Super: Layouts.Home,
    auth: false
  }
]

export default routes
