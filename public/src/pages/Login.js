import React, { useState, useEffect } from "react";
import { FormContainer } from "../styles/styled.pages";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";
function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: ""
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
            console.log("in validation", loginRoute)
            const { password, username } = values;
            const { data } = await axios.post(loginRoute, {
                username,
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
        const { password, username } = values;
        if (password === "") {
            toast.error("Password is compulsory", toastOptions);
            return false;
        } else if (username.length === "") {
            toast.error("Email is compulsory", toastOptions);
            return false;
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

            <FormContainer>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <img src={Logo} alt="Logo" />
                        <h1> Essenger </h1>
                    </div>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={(event) => handleChange(event)}
                        min="3" />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(event) => handleChange(event)}
                        max="8" />

                    <button type="submit"> Login </button>
                    <span> Dont have an account ? <Link to="/register">Register  </Link></span>

                </form>
            </FormContainer>
            <ToastContainer />
        </>

    )
}
export default Login;