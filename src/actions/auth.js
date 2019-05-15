
import {
    AUTH_LOGIN_USER_REQUEST,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_GO_TO_PRODUCT_PAGE,
    AUTH_GO_TO_PAGE,
    AUTH_ADD_PRODUCT_TO_CART,
    AUTH_SIGNUP_USER_REQUEST,
    AUTH_SIGNUP_USER_FAILURE,
    AUTH_SIGNUP_USER_SUCCESS,
    AUTH_LOGOUT_USER,
    AUTH_GET_USER_REQUEST,
    AUTH_GET_USER_SUCCESS,
    AUTH_GET_USER_FAILURE,
    AUTH_GET_ALL_USERS_REQUEST,
    AUTH_GET_ALL_USERS_SUCCESS,
    AUTH_GET_ALL_USERS_FAILURE,
    AUTH_EDIT_USER_REQUEST,
    AUTH_EDIT_USER_FAILURE,
    AUTH_EDIT_USER_SUCCESS,
    AUTH_SET_STEP,
    AUTH_PREVIEW_COLOR,
    AUTH_OPEN_EDIT_FEATURES,
    AUTH_OPEN_EDIT_EXPERIENCE,
    AUTH_OPEN_EDIT_TAGS,
    AUTH_OPEN_CHANGE_AVATAR,
    AUTH_OPEN_EDIT_DESCRIPTION,
    AUTH_OPEN_UPLOAD_MEDIA,
    AUTH_CLOSE_EDIT_FEATURES,
    AUTH_CLOSE_EDIT_EXPERIENCE,
    AUTH_CLOSE_EDIT_TAGS,
    AUTH_GET_FEATURES_REQUEST,
    AUTH_GET_FEATURES_SUCCESS,
    AUTH_GET_FEATURES_FAILURE,
    AUTH_CLOSE_EDIT_DESCRIPTION,
    AUTH_CLOSE_CHANGE_AVATAR,
    AUTH_CLOSE_UPLOAD_MEDIA,
    AUTH_UPLOAD_MEDIA_USER_REQUEST,
    AUTH_UPLOAD_MEDIA_USER_SUCCESS,
    AUTH_UPLOAD_MEDIA_USER_FAILURE,
    AUTH_OPEN_SHARE_PROFILE,
    AUTH_CLOSE_SHARE_PROFILE,
    AUTH_OPEN_SEE_MEDIA,
    AUTH_CLOSE_SEE_MEDIA
} from '../constants';
import { push } from 'connected-react-router'

export function setDataTree(data) {

    return {
        type: AUTH_LOGIN_USER_SUCCESS,
        payload: {
            data
        }
    };
}
export function activateOrDesactivate(name) {
    return {
        type: AUTH_LOGIN_USER_FAILURE,
        payload: {
            name
        }
    };
}

export function goToProductPage(productId) {

    return {
        type: AUTH_GO_TO_PRODUCT_PAGE,
        payload: {
            productId
        }
    };
}

export function goToPage(page) {

    return {
        type: AUTH_GO_TO_PAGE,
        payload: {
            page
        }
    };
}

export function addProductToCart(product) {
    console.log("adding " + product)
    return {
        type: AUTH_ADD_PRODUCT_TO_CART,
        payload: {
            product
        }
    };
}
export function removeProductFromCart(index) {

    return {
        type: "REMOVE_FROM_CART",
        payload: {
            index
        }
    };
}

export function sideBar() {
    console.log("this")

    return {
        type: "SIDEBAR",
    };
}

export function qtyToProduct(product,qty) {
    console.log("this")

    return {
        type: "QTY",
        payload:{
            product,
            qty

        }
    };
}