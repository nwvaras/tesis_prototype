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
import React from "react";
export default function hasFeature(id,node,parent=null){
        if(node.id === id){
            return (node.selected && (parent!==null? getParentSelected(parent): true))
        }else{
            if(node.children){

                return node.children.some( (child) => {
                    return hasFeature(id,child,node)
                })
            }
        }

        return false


    }
function getParentSelected(parent){
    return parent.selected
}

export function getIconOfBar(node){
    console.log(node)
    switch(node.icon){
        case "Notification":
            return <Notification/>;
        case "List":
            return <List/>;
        case "Favorite":
            return <Favorite/>;
        case "AddCircle":
            return <AddCircle/>;
        case "CardGiftcard":
            return <CardGiftcard/>;
        case "DirectionsCar":
            return <DirectionsCar/>;
        case "AllInbox":
            return <AllInbox/>;
        case "ChromeReaderMode":
            return <ChromeReaderMode/>;
        case "ViewHeadline":
            return <ViewHeadline/>;
        case "Money":
            return <Money/>;
        case "StarRate":
            return <StarRate/>;
        case "QuestionAnswer":
            return <QuestionAnswer/>;
        case "Search":
            return <Search/>;
        case "Chat":
            return <Chat/>;
        case "Email":
            return <Email/>;
        case "Category":
            return <Category/>;
        case "Description":
            return <Description/>;
        case "CreditCard":
            return <CreditCard/>;
        case "AccountBalance":
            return <AccountBalance/>;
        case "AccountBalanceWallet":
            return <AccountBalanceWallet/>;
        case "AccountCircle":
            return <AccountCircle/>;
    }
}