import {
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_GO_TO_PRODUCT_PAGE,
    AUTH_GO_TO_PAGE,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_ADD_PRODUCT_TO_CART,
} from '../constants';
import jsonInitial from "../others/yeison"
import jsonInitial2 from "../others/yeison2"
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


const initialState = {data: null,
    pages:[{name:"Home", url: "/",id:0},{name:"Lista de Productos", url: "/category-page",id:1},{name:"Producto", url: "/product-page",id:2},{name:"Carro de compra", url: "/shopping-cart-page"},{name:"Pago/Despacho/Confirmacion", url: "/payment-page",id:3}],
    ads:{
        top:[
            {src:1}
        ],
    },
    categories:[
        {
            name:"Notebooks",
            id:0,

        },
        {
            name:"Microondas",
            id:1,

        }
    ],
products :jsonInitial()['results'].map( (result,index) =>{
return {photos:["","",""].map( (wop) => {return({src :result.product_entries[0].product.picture_url})}),
price:parseInt(result.product_entries[0].prices[0].min_normal_price),
discountPrice:parseInt(result.product_entries[0].prices[0].min_normal_price),
name:result.product_entries[0].product.name,
id:index,
    specs:result.product_entries[0].product.specs,
    stock: Math.floor((Math.random() * 30   ) + 1),
    categoryName: "Notebooks",
description :result.product_entries[0].product.slug,
category:0,
evaluations:[
            {
                eval:Math.floor((Math.random() * 5) + 1),
                commentary:"holi"
            }
        ],
questions:[
            {
                description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
                upVotes:30,
                nameOfQuestioner:"Silvio",
                downVotes:1,
            },
            {
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
                answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
                upVotes:30,
                nameOfQuestioner:"Silvio",
                downVotes:1,
            }
        ]}
}).concat(jsonInitial2()['results'].map( (result,index) =>{
return {photos:["","",""].map( (wop) => {return({src :result.product_entries[0].product.picture_url})}),
price:parseInt(result.product_entries[0].prices[0].min_normal_price),
discountPrice:parseInt(result.product_entries[0].prices[0].min_normal_price),
name:result.product_entries[0].product.name,
specs:result.product_entries[0].product.specs,
id:50+index,
    stock: Math.floor((Math.random() * 100) + 1),
    categoryName: "Microondas",
description :result.product_entries[0].product.slug,
category:1,
evaluations:[
            {
                eval:Math.floor((Math.random() * 5) + 1),
                commentary:"holi"
            }
        ],
questions:[
            {
                description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
                upVotes:30,
                nameOfQuestioner:"Silvio",
                downVotes:1,
            },
            {
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
                answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
                upVotes:30,
                nameOfQuestioner:"Silvio",
                downVotes:1,
            }
        ]}
})),
activeCategory: 0,
    activeProduct: 0,
    cart:[],
    searchText: "",
    categoryVariables:[{variable1:"line_brand_unicode",name1: "Marca",values1:getOptionsforVar(jsonInitial,"line_brand_unicode"),variable2:'processor_core_count_unicode',name2: "Procesadores",values2:getOptionsforVar(jsonInitial,"processor_core_count_unicode")},{variable1:'brand_name',name1:"Marca",values1:getOptionsforVar(jsonInitial2,"brand_name"),variable2: 'has_grill',name2:"¿Tiene Parrilla?",values2:["Si","No"]}],
    sidebarActive: true,}

function getOptionsforVar(json,variable){
    return Array.from(new Set(json()['results'].map( (result,index) =>{
return result.product_entries[0].product.specs[variable]
})))
}
// const initialState = {
//
//     data: null,
//     pages:[{name:"Home", url: "/",id:0},{name:"List. Productos", url: "/category-page",id:1},{name:"Producto", url: "/product-page",id:2},{name:"Cart", url: "/shopping-cart-page"},{name:"Pago/Despacho/Confirmacion", url: "/payment-page",id:3}],
//     ads:{
//         top:[
//             {src:1}
//         ],
//     },
//     categories:[
//         {
//             name:"Ropa",
//             id:1,
//
//         }
//     ],
//     products:[{
//        name:"Gucci",
//        photos:[{src: 'https://picsum.photos/id/'+0+'/192/200'},{src: 'https://picsum.photos/id/'+0+'/192/200'},{src: 'https://picsum.photos/id/'+0+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.",
//        price:1431,
//        discountPrice:743,
//         id:0,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 id:1,
//                 eval:4,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 id: 1,
//                 description:"Preguntaaaa",
//                 answer:"Respuestaaaaaaaaaaaaaaaaa",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"TomFord",
//        photos:[{src: tomFord}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1432,
//        discountPrice:743,
//         id:1,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+1+'/192/200'},{src: 'https://picsum.photos/id/'+1+'/192/200'},{src: 'https://picsum.photos/id/'+1+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:2,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+2+'/192/200'},{src: 'https://picsum.photos/id/'+2+'/192/200'},{src: 'https://picsum.photos/id/'+2+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:3,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+3+'/192/200'},{src: 'https://picsum.photos/id/'+3+'/192/200'},{src: 'https://picsum.photos/id/'+3+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:4,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+4+'/192/200'},{src: 'https://picsum.photos/id/'+4+'/192/200'},{src: 'https://picsum.photos/id/'+4+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:5,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+5+'/192/200'},{src: 'https://picsum.photos/id/'+5+'/192/200'},{src: 'https://picsum.photos/id/'+5+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:6,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+5+'/192/200'},{src: 'https://picsum.photos/id/'+5+'/192/200'},{src: 'https://picsum.photos/id/'+5+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:7,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+6+'/192/200'},{src: 'https://picsum.photos/id/'+6+'/192/200'},{src: 'https://picsum.photos/id/'+6+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:8,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+7+'/192/200'},{src: 'https://picsum.photos/id/'+7+'/192/200'},{src: 'https://picsum.photos/id/'+7+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:9,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         category:0,
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+8+'/192/200'},{src: 'https://picsum.photos/id/'+8+'/192/200'},{src: 'https://picsum.photos/id/'+8+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:10,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+9+'/192/200'},{src: 'https://picsum.photos/id/'+9+'/192/200'},{src: 'https://picsum.photos/id/'+9+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:11,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+10+'/192/200'},{src: 'https://picsum.photos/id/'+10+'/192/200'},{src: 'https://picsum.photos/id/'+10+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:12,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+11+'/192/200'},{src: 'https://picsum.photos/id/'+11+'/192/200'},{src: 'https://picsum.photos/id/'+11+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:13,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+12+'/192/200'},{src: 'https://picsum.photos/id/'+12+'/192/200'},{src: 'https://picsum.photos/id/'+12+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:14,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+13+'/192/200'},{src: 'https://picsum.photos/id/'+13+'/192/200'},{src: 'https://picsum.photos/id/'+13+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:15,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+14+'/192/200'},{src: 'https://picsum.photos/id/'+14+'/192/200'},{src: 'https://picsum.photos/id/'+14+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:16,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+15+'/192/200'},{src: 'https://picsum.photos/id/'+15+'/192/200'},{src: 'https://picsum.photos/id/'+15+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:17,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+16+'/192/200'},{src: 'https://picsum.photos/id/'+16+'/192/200'},{src: 'https://picsum.photos/id/'+16+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:18,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+17+'/192/200'},{src: 'https://picsum.photos/id/'+17+'/192/200'},{src: 'https://picsum.photos/id/'+17+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:19,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+18+'/192/200'},{src: 'https://picsum.photos/id/'+18+'/192/200'},{src: 'https://picsum.photos/id/'+18+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:20,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",                answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },
//     {
//        name:"Woo",
//        photos:[{src: 'https://picsum.photos/id/'+19+'/192/200'},{src: 'https://picsum.photos/id/'+19+'/192/200'},{src: 'https://picsum.photos/id/'+19+'/192/200'}],
//         description:"Impeccably tailored in Italy from lightweight navy wool.2",
//        price:1433,
//        discountPrice:743,
//         id:21,
//        category:0,
//         stock:3,
//         evaluations:[
//             {
//                 eval:5,
//                 commentary:"holi"
//             }
//         ],
//         questions:[
//             {
//                 description:"Nunc nunc tortor, suscipit eu tempus ac, cursus et massa. Maecenas vitae lacus vitae lacus maximus pellentesque a vel justo. Praesent cursus justo et orci facilisis cursus. Quisque eget consectetur tortor, ullamcorper vulputate ligula. Quisque dolor est, sodales non ultricies vitae, ullamcorper eu mi. Integer blandit dolor erat, et tincidunt nulla molestie eu. Nullam viverra neque vitae nisl viverra, vel elementum lacus venenatis. Phasellus fermentum interdum magna, nec gravida urna accumsan vitae. Donec rhoncus ac enim quis gravida. Pellentesque pellentesque nisi sed consequat molestie.",
//                 answer:"Nulla auctor, erat id euismod pellentesque, ligula lorem pulvinar dui, id dapibus nunc velit ultrices ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac velit a arcu lobortis iaculis eget in libero. Ut in quam nibh. Fusce eget nisi vitae erat bibendum sollicitudin eu vel leo. Morbi a felis commodo magna cursus iaculis non sed enim. Integer condimentum laoreet tellus a rhoncus. Aliquam ornare ullamcorper euismod. Ut eu congue orci. Suspendisse at facilisis arcu. Ut consectetur, risus sed sodales molestie, mauris justo feugiat metus, in placerat purus libero vitae nibh.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             },
//             {
//                 description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna purus, congue eget scelerisque vitae, congue non sem. Praesent fermentum tempor leo, quis consequat orci. Proin sit amet magna ut urna consectetur maximus at ut elit. Vestibulum ultricies ligula in ornare bibendum. Nulla justo lectus, malesuada eget accumsan id, ultrices nec velit. Donec semper vitae massa vehicula viverra. Morbi et sagittis diam. Vestibulum egestas, arcu id eleifend fringilla, felis felis mollis velit, quis porttitor neque orci a nibh. Proin rhoncus ex eget risus tincidunt, a blandit velit aliquet. Nulla accumsan volutpat magna, quis efficitur felis pellentesque in.",
//                 answer:"Fusce quis urna eros. Mauris sagittis orci non massa egestas dictum. Vestibulum metus odio, porttitor id facilisis id, imperdiet ut metus. Mauris erat odio, congue vitae nisi quis, sodales iaculis mi. Nunc cursus turpis ac est efficitur, vitae varius diam pellentesque. Etiam eu risus mattis, facilisis nunc ut, sodales felis. Nunc a ligula leo.",
//                 upVotes:30,
//                 nameOfQuestioner:"Silvio",
//                 downVotes:1,
//             }
//         ]
//
//     },],
//     activeCategory: 0,
//     activeProduct: 0,
//     cart:[],
//     searchText: "",
//     sidebarActive: true,
//
// };
//

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
        case "ADD_QUESTION":
            console.log(action.payload.product)
            return Object.assign({}, state, {
               products: [...state.products.filter((prod,index) => prod.id !== action.payload.product.id),action.payload.product]
            });
        default:

            return state;
    }
}

