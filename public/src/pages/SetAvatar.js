import React, { useState, useEffect } from "react";
import { ContainerSetAvatar } from "../styles/styled.pages";
import { useNavigate } from "react-router-dom";
import Loader from "../assets/loader.gif"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";
import { Buffer } from "buffer";

export default function SetAvatar() {
    const api = "https://api.multiavatar.com/45678945";
    const navigate = useNavigate();
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(undefined);
    const toastOptions = {
        position: "bottom-left",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }
    useEffect(() => {
        if (!localStorage.getItem("chat-app-user")) {
            navigate("/login")
        }
    }, [navigate])
    const setProfilePicture = async () => {
        if (selectedAvatar === undefined) {
            toast.error("Please select an avatar ", toastOptions)
        } else {
            const user = await JSON.parse(localStorage.getItem("chat-app-user"));
            const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
                image: avatars[selectedAvatar],
            });
            if (data.isSet) {
                user.isAvatarImageSet = true;
                user.avatarImage = data.image;
                localStorage.getItem("chat-app-user", JSON.stringify(user));
                navigate("/")
            }
            else {
                toast.error("Error setting avatar . Please try again", toastOptions)
            }

        }



    };
    useEffect(() => {
        const loadData = async () => {
            const data = [];
            for (let i = 0; i < 4; i++) {
                const image = await axios.get(
                    `${api}/${Math.round(Math.random() * 1000)}`
                );
                const buffer = new Buffer(image.data);
                data.push(buffer.toString("base64"))
            }
            setAvatars(data);
            setIsLoading(false);
        };
        loadData();


    }, [])

    return (

        <>{
            isLoading ? <ContainerSetAvatar>

                <img src={Loader} alt="loader" className="loader" />
            </ContainerSetAvatar>
                : (
                    <ContainerSetAvatar >
                        <div className="title-container">
                            <h1>
                                Pick an avatar as your profile picture
                            </h1> </div>
                        <div className="avatars">
                            {
                                avatars.map((avatar, index) => {
                                    return (
                                        <div key={index} className={`avatar ${selectedAvatar === index ? "selected" : ""}`}>
                                            <img src={`data:image/svg+xml;base64,${avatar}`} alt="avatar"
                                                onClick={() => setSelectedAvatar(index)} />

                                        </div>
                                    )

                                })
                            }</div>
                        <button className="submit-btn" onClick={setProfilePicture}>Set as Profile Picture</button>

                    </ContainerSetAvatar>)}
            <ToastContainer />
        </>
    )
}
