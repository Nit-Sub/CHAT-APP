import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.jpg";


export const Contacts = ({ contacts, currentUser }) => {
    const [currentUserName , setCurrentUserName]= useState(undefined);
    const [currentUserImage , setCurrentUserImage]= useState(undefined);
    const [currentSelected , serCurrentSelected]=useState(undefined);
    useEffect(()=>{
        if(currentUser){
        setCurrentUserImage(currentUser.avatarImage);
        setCurrentUserName(currentUser.username);
        }
    },[currentUser])
    const changeCurrentChat=(index , contact)=>{

    }
    return (<>
        <div>
        
        </div></>)
}