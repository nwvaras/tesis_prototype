import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { Provider } from 'react-redux'

import "assets/scss/material-kit-pro-react.scss?v=1.3.0";
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.jsx";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import EcommercePage from "views/DaEcommerce/EcommercePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import PaymentPage from "views/PaymentPage/PaymentPage.js";
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
import Header from "views/Header/index.js";
import hasFeature from "utils/index.js"
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
import ChatWidget from 'views/DaEcommerce/Chat.jsx'
const initialState = {};
const hist = createBrowserHistory()
const store = configureStore(initialState, hist);
export function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

export default function mergeDeep(target, source) {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, { [key]: source[key] });
        else
          output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

let data= {
    name: 'Ecommerce',
    id: 'Ecommerce',
    toggled: true,
    selected: true,
      icon: "Money",
    children: [
        {
            name: 'Usuarios',
            id: 'Usuarios',
            disabled:[],
            children: [
                { name: 'Notificaciones',
                 id: 'Notificaciones',
            selected: true,
                    disabled:[],
                icon: "Notification",},
                { name: 'HistorialDeCompra',
                 id: 'HistorialDeCompra',
            selected: true,
                    disabled:[0,1,2],
                icon: "List",},
                { name: 'Subscripcion',
                 id: 'Subscripcion',
                    disabled:[2,4,3],
            selected: true,
                icon: "Email",},
                { name: 'WishList',
                 id: 'WishList',
            selected: true,
                    disabled:[3,4],
                icon: "Favorite",},
                { name: 'CodigoDesc',
                 id: 'CodigoDesc',
            selected: true,
                    disabled:[1,2,3],
                icon:"CardGiftcard",},
            ],
            selected: true,
            icon: "AccountCircle",
        },
        {
            name: 'Compra',
            id: 'Compra',
            disabled:[0,1,2,3],
            children: [
                { name: 'Despacho',
                 id: 'Despacho',
            selected: true,
                    disabled:[0,1,2,3],
                icon: "DirectionsCar",},
                { name: 'Ordenes',
                 id: 'Ordenes',
            selected: true,
                    disabled:[0,1,2,3],
                icon: "AllInbox",},
            ],
                selected: true,
            icon: "Money",

        },
        {
            name: 'Ads',
            id: 'Ads',
            disabled:[3,4],
                    children: [
                { name: 'Ofertas',
                 id: 'Ofertas',
            selected: true,
                    disabled:[0,2,3,4],
                icon: "ChromeReaderMode",},
                { name: 'Recomendados',
                 id: 'Recomendados',
            selected: true,
                    disabled:[3,4],
                icon: "ChromeReaderMode",},
                { name: 'Novedades',
                 id: 'Novedades',
            selected: true,
                    disabled:[1,2,3,4],
                icon: "ChromeReaderMode",},
                { name: 'TopProductsBuyTimes',
                 id: 'TopProductsBuyTimes',
            selected: true,
                    disabled:[1,2,3,4],
                icon: "ChromeReaderMode",},
                { name: 'TopProductsEvaluations',
                 id: 'TopProductsEvaluations',
                    disabled:[1,2,3,4],
                selected: true, icon:"ChromeReaderMode"}],
            selected: true,
            icon: "ChromeReaderMode",
        },
        {
            name: 'Products',
            id: 'Products',
            disabled:[],
                    children: [
                { name: 'Precio',
                 id: 'Precio',
            selected: true,
                    disabled:[],
                icon: "Money",},
                { name: 'Stock',
                 id: 'Stock',
            selected: true,
                    disabled:[0,1,3],
                icon: "AllInbox",},
                { name: 'Evaluacion',
                 id: 'Evaluacion',
            selected: true,
                    disabled:[3,4],
                icon: "StarRate",},
                { name: 'Preguntas',
                 id: 'Preguntas',
                    disabled:[0,1,3,4],
                selected: true, icon:"QuestionAnswer"}],
            selected: true,

            icon: "AllInbox",
        },
        {
            name: 'Catalogo',
            id: 'Catalogo',
            selected: true,
            icon: "Category",
            disabled:[],
            children: [
                { name: 'Busqueda',
                 id: 'Busqueda',
            selected: true,
                    disabled:[],
                icon: "Search",},
                { name: 'Categorias',
                 id: 'Categorias',
            selected: true,
                    disabled:[],
                icon: "Category",},
            ],


        },
        {
            name: 'Soporte',
            id: 'Soporte',
            disabled:[],
            children: [
                { name: 'Chat',
                 id: 'Chat',
            selected: true,
                    disabled:[],
                icon: "Chat",},
                { name: 'Email',
                 id: 'Email',
            selected: true,
                    disabled:[],
                icon: "Email",},
            ],
                selected: true,
            icon: "Email",

        },
        {
            name: 'InformacionEmpresa',
            id: 'InformacionEmpresa',
            disabled: [4],
            children: [
                { name: 'Informacion',
                 id: 'Informacion',
            selected: true,
                    disabled:[4],
                icon: "Description",}
            ],
                selected: true,
            icon: "Description",

        },
        {
            name: 'Pago',
            id: 'Pago',
            disabled:[0,1,2,3],
            children: [
                { name: 'TarjetaDeCredito',
                 id: 'TarjetaDeCredito',
            selected: true,
                    disabled:[0,1,2,3],
                icon: "CreditCard",},
                { name: 'TransferenciaBancaria',
                 id: 'TransferenciaBancaria',
            selected: true,
                    disabled:[0,1,2,3],
                icon: "AccountBalance",},
                { name: 'PagoEnCash',
                 id: 'PagoEnCash',
            selected: true,
                    disabled:[0,1,2,3],
                icon: "Money",},
                { name: 'PagoEnCuotas',
                 id: 'PagoEnCuotas',
            selected: true,
                    disabled:[0,1,2,3],
                icon: "AccountBalanceWallet",},
            ],
                selected: true,
            icon: "Money",

        }
    ]
};
// try {
//
//    const saved = JSON.parse(localStorage.getItem('data'));
//    data = mergeDeep(data,saved)
//
// }
// catch (e) {
//
//
// }
store.dispatch(setDataTree(data))

ReactDOM.render(
  <Provider store={store}>

        <ConnectedRouter history={hist}>
  <Router history={hist}>
      <SideBar>


        <Header/>
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
      <Route path="/payment-page" component={PaymentPage} />
      <Route path="/sidebar" component={SideBar} />
      <Route path="/" component={EcommercePage} />
    </Switch>

      </SideBar>
      <ChatWidget/>
  </Router>
  </ConnectedRouter>
    </Provider>,
  document.getElementById("root")
);
