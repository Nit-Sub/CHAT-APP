import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "../styles/styled.components";
import { BiPowerOff } from "react-icons/bi"

export const Logout = () => {
    const navigate = useNavigate();
    const handleClick = async () => {
        localStorage.clear();
        navigate("/login");

    }
    return (
        <LogoutButton onClick={handleClick}>
            <BiPowerOff />
        </LogoutButton>
        
    )

}
