import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.jpg";


export const Contacts = ({ contacts, currentUser }) => {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, serCurrentSelected] = useState(undefined);
    useEffect(() => {
        if (currentUser) {
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser])
    const changeCurrentChat = (index, contact) => {

        return (<>
            <div>
                {
                    currentUserImage && currentUserName && (
                        <Container>
                            <div className="brand">
                                <img src={Logo} alt="logo" />
                                <h3> Essenger</h3>

                            </div>
                            <div className="contacts">
                                {
                                    contacts.map((contact , index )=>{
                                        return(
                                            <div className="contact" key={index}>

                                                </div>
                                        )

                                    })
                                }
                                                                                                                                                                                                                                                                                                                                                                                             

                            </div>
                        </Container>

                    )
                }

            </div></>)
    }
}

const Container = styled.div`
.brand{
    color: white;
}`;