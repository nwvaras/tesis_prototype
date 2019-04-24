import {
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGIN_USER_FAILURE
} from '../constants';
import {setDataTree} from "../actions/auth";

const initialState = {
    data: null,
};


function onSelected(id,node,toValue=null){
        console.log("inner")
        if(node.id === id){
            node.selected=!node.selected
        }else{
            if(node.children){
                console.log("children")
                node.children= node.children.map( (child) => {
                    return onSelected(id,child)
                })
            }
        }
        return node


    }
export default function authReducer(state = initialState, action) {
    console.log("---")
        console.log(state.data)
    console.log("---")
    switch (action.type) {

        case AUTH_LOGIN_USER_SUCCESS:
            return Object.assign({}, state, {
               data: action.payload.data
            });
        case AUTH_LOGIN_USER_FAILURE:
            console.log("onclick")
            const newData =  state.data.children.map(
                   (content, i) =>content.id === action.payload.name ? {...content, selected: !content.selected}
                                           : onSelected(action.payload.name,content)
                )
            console.log(newData)
            localStorage.setItem('data', JSON.stringify({...state.data,children : newData}));
             return Object.assign({}, state, {
               data: {...state.data,children : newData}
            });
        default:
            return state;
    }
}

