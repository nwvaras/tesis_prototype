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
const initialState = {};
const hist = createBrowserHistory()
const store = configureStore(initialState, hist);
let data={}
try {

   data = JSON.parse(localStorage.getItem('data'));

}
catch (e) {
  data= data = {
    name: 'Ecommerce',
    id: 'Ecommerce',
    toggled: true,
    selected: true,
    children: [
        {
            name: 'Usuarios',
            id: 'Usuarios',
            children: [
                { name: 'Notificaciones',
                 id: 'Notificaciones',
            selected: true },
                { name: 'HistorialDeCompra',
                 id: 'HistorialDeCompra',
            selected: true },
                { name: 'Fidelizacion',
                 id: 'Fidelizacion',
            selected: true },
                { name: 'WishList',
                 id: 'WishList',
            selected: true },
                { name: 'CodigoDesc',
                 id: 'CodigoDesc',
            selected: true },
            ],
            selected: true
        },
        {
            name: 'Compra',
            id: 'Compra',
            children: [
                { name: 'Despacho',
                 id: 'Despacho',
            selected: true},
                { name: 'Ordenes',
                 id: 'Ordenes',
            selected: true},
            ],
                selected: true,

        },
        {
            name: 'Ads',
            id: 'Ads',
                    children: [
                { name: 'Ofertas',
                 id: 'Ofertas',
            selected: true },
                { name: 'Recomendados',
                 id: 'Recomendados',
            selected: true },
                { name: 'Novedades',
                 id: 'Novedades',
            selected: true },
                { name: 'TopProductsBuyTimes',
                 id: 'TopProductsBuyTimes',
            selected: true },
                { name: 'TopProductsEvaluations',
                 id: 'TopProductsEvaluations',}],
            selected: true
        },
        {
            name: 'Products',
            id: 'Products',
                    children: [
                { name: 'Precio',
                 id: 'Precio',
            selected: true },
                { name: 'Stock',
                 id: 'Stock',
            selected: true },
                { name: 'Evaluacion',
                 id: 'Evaluacion',
            selected: true },
                { name: 'Preguntas',
                 id: 'Preguntas'}],
            selected: true
        },
        {
            name: 'Catalogo',
            id: 'Catalogo',
            children: [
                { name: 'Busqueda',
                 id: 'Busqueda',
            selected: true},
                { name: 'Categorias',
                 id: 'Categorias',
            selected: true},
            ],
                selected: true,

        },
        {
            name: 'Soporte',
            id: 'Soporte',
            children: [
                { name: 'Chat',
                 id: 'Chat',
            selected: true},
                { name: 'Email',
                 id: 'Email',
            selected: true},
            ],
                selected: true,

        },
        {
            name: 'InformacionEmpresa',
            id: 'InformacionEmpresa',
            children: [
                { name: 'Informacion',
                 id: 'Informacion',
            selected: true}
            ],
                selected: true,

        },
        {
            name: 'Pago',
            id: 'Pago',
            children: [
                { name: 'TarjetaDeCredito',
                 id: 'TarjetaDeCredito',
            selected: true},
                { name: 'TransferenciaBancaria',
                 id: 'TransferenciaBancaria',
            selected: true},
                { name: 'PagoEnCash',
                 id: 'PagoEnCash',
            selected: true},
                { name: 'PagoEnCuotas',
                 id: 'PagoEnCuotas',
            selected: true},
            ],
                selected: true,

        }
    ]
};

}
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
      <Route path="/" component={PresentationPage} />
    </Switch>
    </SideBar>
  </Router>
  </ConnectedRouter>
    </Provider>,
  document.getElementById("root")
);
