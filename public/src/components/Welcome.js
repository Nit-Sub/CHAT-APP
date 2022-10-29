import React, { useEffect } from "react";
import { WelcomeContainer } from "../styles/styled.components";
import Robot from "../assets/robot.gif";
export const Welcome = ({ currentUser }) => {

    return (
        <>

            <WelcomeContainer>
                <img src={Robot} alt="Robot" />
                <h1>
                    Welcome, <span>{currentUser.username}!</span>
                </h1>
                <h3>
                    Please select a chat to Start Messaging
                </h3>

            </WelcomeContainer>

        </>
    )
}