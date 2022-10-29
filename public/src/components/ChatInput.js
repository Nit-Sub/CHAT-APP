import React, { useState } from "react";
import { InputContainer } from "../styles/styled.components";
import Picker from "emoji-picker-react";
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from "react-icons/bs";

export const ChatInput = ({ handleSendMsg }) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("");
    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };
    const handleEmojiClick = (event, emoji) => {
        let message = msg;
        message += emoji.emoji;
        setMsg(message);

    };
    const sendChat=(event)=>{
        event.preventDefault();
        
        if(msg.length>0){
            handleSendMsg(msg);
            setMsg('');
        }
    }


    return (

        <InputContainer>
            <div className="button-container">
                <div className="emoji">
                    <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
                    {
                        showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />
                    }

                </div>

            </div>
            <form className="input-container" onSubmit={(e)=>sendChat(e)}>
                <input type="text" placeholder="type your message here" value={msg} onChange={(e) => setMsg(e.target.value)} />
                <button className="submit" >
                    <IoMdSend />
                </button>
            </form>

        </InputContainer>

    )
}
