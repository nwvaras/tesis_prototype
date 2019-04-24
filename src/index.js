import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { Provider } from 'react-redux'

import "assets/scss/material-kit-pro-react.scss?v=1.3.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.jsx";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import EcommercePage from "views/DaEcommerce/EcommercePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import PresentationPage from "views/PresentationPage/PresentationPage.jsx";
import PricingPage from "views/PricingPage/PricingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ProductPage from "views/ProductPage/ProductPage.jsx";
import SectionsPage from "views/SectionsPage/SectionsPage.jsx";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import SideBar from "views/SideBar/SideBar.js";
import ErrorPage from "views/ErrorPage/ErrorPage.jsx";
import CategoryPage from "views/CategoryPage/EcommercePage.jsx";

import { ConnectedRouter } from 'connected-react-router';


import configureStore from './store/configureStore';
import {setDataTree} from "./actions/auth";
import Notification from "@material-ui/icons/NotificationImportant"
import List from "@material-ui/icons/List"
import Favorite from "@material-ui/icons/Favorite"
import AddCircle from "@material-ui/icons/AddCircle"
import CardGiftcard from "@material-ui/icons/CardGiftcard"
import DirectionsCar from "@material-ui/icons/DirectionsCar"
import AllInbox from "@material-ui/icons/AllInbox"
import ChromeReaderMode from "@material-ui/icons/ChromeReaderMode"
import ViewHeadline from "@material-ui/icons/ViewHeadline"
import Money from "@material-ui/icons/AttachMoney"
import StarRate from "@material-ui/icons/StarRate"
import QuestionAnswer from "@material-ui/icons/QuestionAnswer"
import Search from "@material-ui/icons/Search"
import Chat from "@material-ui/icons/Chat"
import Email from "@material-ui/icons/Email"
import Category from "@material-ui/icons/Category"
import Description from "@material-ui/icons/Description"
import CreditCard from "@material-ui/icons/CreditCard"
import AccountBalance from "@material-ui/icons/AccountBalance"
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet"
import AccountCircle from "@material-ui/icons/AccountCircle"
const initialState = {};
const hist = createBrowserHistory()
const store = configureStore(initialState, hist);

let data={}
// try {
//
//    data = JSON.parse(localStorage.getItem('datsa'));
//
// }
// catch (e) {
  data= {
    name: 'Ecommerce',
    id: 'Ecommerce',
    toggled: true,
    selected: true,
      icon: Money,
    children: [
        {
            name: 'Usuarios',
            id: 'Usuarios',
            children: [
                { name: 'Notificaciones',
                 id: 'Notificaciones',
            selected: true,
                icon: Notification,},
                { name: 'HistorialDeCompra',
                 id: 'HistorialDeCompra',
            selected: true,
                icon: List,},
                { name: 'Fidelizacion',
                 id: 'Fidelizacion',
            selected: true,
                icon: Favorite,},
                { name: 'WishList',
                 id: 'WishList',
            selected: true,
                icon: AddCircle,},
                { name: 'CodigoDesc',
                 id: 'CodigoDesc',
            selected: true,
                icon:CardGiftcard,},
            ],
            selected: true,
            icon: AccountCircle,
        },
        {
            name: 'Compra',
            id: 'Compra',
            children: [
                { name: 'Despacho',
                 id: 'Despacho',
            selected: true,
                icon: DirectionsCar,},
                { name: 'Ordenes',
                 id: 'Ordenes',
            selected: true,
                icon: AllInbox,},
            ],
                selected: true,
            icon: Money,

        },
        {
            name: 'Ads',
            id: 'Ads',
                    children: [
                { name: 'Ofertas',
                 id: 'Ofertas',
            selected: true,
                icon: ChromeReaderMode,},
                { name: 'Recomendados',
                 id: 'Recomendados',
            selected: true,
                icon: ChromeReaderMode,},
                { name: 'Novedades',
                 id: 'Novedades',
            selected: true,
                icon: ChromeReaderMode,},
                { name: 'TopProductsBuyTimes',
                 id: 'TopProductsBuyTimes',
            selected: true,
                icon: ChromeReaderMode,},
                { name: 'TopProductsEvaluations',
                 id: 'TopProductsEvaluations',
                selected: true, icon:ChromeReaderMode}],
            selected: true,
            icon: ChromeReaderMode,
        },
        {
            name: 'Products',
            id: 'Products',
                    children: [
                { name: 'Precio',
                 id: 'Precio',
            selected: true,
                icon: Money,},
                { name: 'Stock',
                 id: 'Stock',
            selected: true,
                icon: AllInbox,},
                { name: 'Evaluacion',
                 id: 'Evaluacion',
            selected: true,
                icon: StarRate,},
                { name: 'Preguntas',
                 id: 'Preguntas',
                selected: true, icon:QuestionAnswer}],
            selected: true,
            icon: AllInbox,
        },
        {
            name: 'Catalogo',
            id: 'Catalogo',
            selected: true,
            icon: Category,
            children: [
                { name: 'Busqueda',
                 id: 'Busqueda',
            selected: true,
                icon: Search,},
                { name: 'Categorias',
                 id: 'Categorias',
            selected: true,
                icon: Category,},
            ],


        },
        {
            name: 'Soporte',
            id: 'Soporte',
            children: [
                { name: 'Chat',
                 id: 'Chat',
            selected: true,
                icon: Chat,},
                { name: 'Email',
                 id: 'Email',
            selected: true,
                icon: Email,},
            ],
                selected: true,
            icon: Email,

        },
        {
            name: 'InformacionEmpresa',
            id: 'InformacionEmpresa',
            children: [
                { name: 'Informacion',
                 id: 'Informacion',
            selected: true,
                icon: Description,}
            ],
                selected: true,
            icon: Description,

        },
        {
            name: 'Pago',
            id: 'Pago',
            children: [
                { name: 'TarjetaDeCredito',
                 id: 'TarjetaDeCredito',
            selected: true,
                icon: CreditCard,},
                { name: 'TransferenciaBancaria',
                 id: 'TransferenciaBancaria',
            selected: true,
                icon: AccountBalance,},
                { name: 'PagoEnCash',
                 id: 'PagoEnCash',
            selected: true,
                icon: Money,},
                { name: 'PagoEnCuotas',
                 id: 'PagoEnCuotas',
            selected: true,
                icon: AccountBalanceWallet,},
            ],
                selected: true,
            icon: Money,

        }
    ]
};

// }
store.dispatch(setDataTree(data))

ReactDOM.render(
  <Provider store={store}>
        <ConnectedRouter history={hist}>
  <Router history={hist}>
    <SideBar>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/blog-posts" component={BlogPostsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/ecommerce-page" component={EcommercePage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/product-page" component={ProductPage} />
      <Route path="/sections" component={SectionsPage} />
      <Route path="/shopping-cart-page" component={ShoppingCartPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/category-page" component={CategoryPage} />
      <Route path="/sidebar" component={SideBar} />
      <Route path="/" component={EcommercePage} />
    </Switch>
    </SideBar>
  </Router>
  </ConnectedRouter>
    </Provider>,
  document.getElementById("root")
);
