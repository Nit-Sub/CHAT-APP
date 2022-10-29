import React, { useState, useEffect } from "react";
import {FormContainerRegister} from "../styles/styled.pages"
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";
function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confrimPassword: ""
    });
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }
    useEffect(() => {
        if (localStorage.getItem('chat-app-user')) {
            navigate("/")
        }
    }, [navigate])



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            console.log("in validation", registerRoute)
            const { password, username, email } = values;
            const { data } = await axios.post(registerRoute, {
                username,
                email,
                password
            });
            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                localStorage.setItem('chat-app-user', JSON.stringify(data.user));
                navigate("/")

            }

        }

    };
    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
            toast.error("Both Password doesnot matched", toastOptions);
            return false;
        } else if (username.length < 3) {
            toast.error("Username should be greater than 3 characters", toastOptions);
            return false;
        }
        else if (password.length > 8) {
            toast.error(" Password should be qual or greater than 8 characters", toastOptions);
            return false;
        }
        else if (email === "") {
            toast.error("Email is required", toastOptions);

        }
        return true;


    }
    const handleChange = (event) => {
        setValues({
            ...values, [event.target.name]: event.target.value
        })


    }
    return (
        <>

            <FormContainerRegister>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <img src={Logo} alt="Logo" />
                        <h1> Essenger </h1>
                    </div>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={(event) => handleChange(event)} />
                    <input
                        type="email "
                        placeholder="Email"
                        name="email"
                        onChange={(event) => handleChange(event)} />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(event) => handleChange(event)} />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={(event) => handleChange(event)} />
                    <button type="submit"> Create User </button>
                    <span> Already have an account ? <Link to="/login">Login </Link></span>

                </form>
            </FormContainerRegister>
            <ToastContainer />
        </>

    )
}


export default Register;