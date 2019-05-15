import {
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_GO_TO_PRODUCT_PAGE,
    AUTH_GO_TO_PAGE,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_ADD_PRODUCT_TO_CART,
} from '../constants';
import {setDataTree} from "../actions/auth";
import gucci from "assets/img/examples/gucci.jpg";
import tomFord from "assets/img/examples/tom-ford.jpg";
import dolce from "assets/img/examples/dolce.jpg";
{/*<Button color="inherit">*/}
              {/*List. Productos*/}
            {/*</Button>*/}
            {/*<Button color="inherit">*/}
              {/*Producto*/}
            {/*</Button>*/}
            {/*<Button color="inherit">*/}
              {/*Pago*/}
            {/*</Button>*/}
            {/*<Button color="inherit">*/}
              {/*Despacho*/}
            {/*</Button>*/}
            {/*<Button color="inherit">*/}
              {/*Carro*/}
            {/*</Button>*/}
            {/*<Button color="inherit">*/}
              {/*Confirmacion*/}
            {/*</Button>*/}
const initialState = {

    data: null,
    pages:[{name:"Home", url: "/",id:0},{name:"List. Productos", url: "/category-page",id:1},{name:"Producto", url: "/product-page",id:2},{name:"Cart", url: "/shopping-cart-page"},{name:"Pago/Despacho/Confirmacion", url: "/payment-page",id:3}],
    ads:{
        top:[
            {src:1}
        ],
    },
    categories:[
        {
            name:"Ropa",
            id:1,

        }
    ],
    products:[{
       name:"Gucci",
       photos:[{src: gucci},{src: gucci},{src: gucci}],
        description:"Impeccably tailored in Italy from lightweight navy wool.",
       price:1431,
       discountPrice:743,
        id:0,
       category:0,
        stock:3,
        evaluations:[
            {
                id:1,
                eval:4,
                commentary:"holi"
            }
        ],
        questions:[
            {
                id: 1,
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"TomFord",
       photos:[{src: tomFord}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1432,
       discountPrice:743,
        id:1,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:2,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:3,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:4,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:5,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:6,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:7,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:8,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:9,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        category:0,
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:10,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:11,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:12,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:13,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:14,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:15,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:16,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:17,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:18,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:19,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:20,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },
    {
       name:"Woo",
       photos:[{src: dolce}],
        description:"Impeccably tailored in Italy from lightweight navy wool.2",
       price:1433,
       discountPrice:743,
        id:21,
       category:0,
        stock:3,
        evaluations:[
            {
                eval:5,
                commentary:"holi"
            }
        ],
        questions:[
            {
                description:"",
                answer:"",
                upVotes:30,
                downVotes:1,
            }
        ]

    },],
    activeCategory: 0,
    activeProduct: 0,
    cart:[],
    searchText: "",
    sidebarActive: true,

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
        case AUTH_GO_TO_PRODUCT_PAGE:
            return Object.assign({}, state, {
               activeProduct: action.payload.productId
            });
        case AUTH_GO_TO_PAGE:
            return Object.assign({}, state, {
               actualPage: action.payload.page
            });
        case AUTH_ADD_PRODUCT_TO_CART:
            action.payload.product.qty=1
            return Object.assign({}, state, {
               cart: [...state.cart,action.payload.product]
            });
        case "REMOVE_FROM_CART":
            return Object.assign({}, state, {
               cart: state.cart.filter((prod,index) => prod.id !== action.payload.index)
            });
        case "SIDEBAR":
            return Object.assign({}, state, {
               sidebarActive: !state.sidebarActive
            });
        case "QTY":
            return Object.assign({}, state, {
               cart: state.cart.map((prod,index) =>{
                   if(prod.id === action.payload.product.id){
                       prod.qty = prod.qty + action.payload.qty
                   }
                   return prod
               })
            });
        default:

            return state;
    }
}

