import styled from "styled-components";

export const Container = styled.div`
padding-top : 1rem;
display: grid;
grid-template-rows: 10% 78% 12%;
gap: 0.1rem;
overflow: hidden;

@media screen and (min-width:720px) and  (max-width: 1080px){
    grid-auto-rows: 15% 70% 15%;
}

.chat-header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details{
        display:flex;
        align-items:center;
        gap: 1rem;
        .avatar{
            img{
                height: 3rem;
            }
        }
        .username{
            
    h3{
        color:white;
    }
        }

    }

}
.chat-messages{
    padding: 1rem 2rem;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar{
        width: 0.2rem;
        &-thumb{
            background-color: #ffffff39;
            width: 0.2rem;
            border-radius: 1rem;
        }

    }
    .message{
        display:flex;
        align-items: center;
        
        .content{
            max-width: 40%;
            overflow-wrap: break-word;
            padding: 1rem;
            font-size:1.1rem;
            border-radius: 1rem;
            color: #d1d1d1;       }
    }
    .sended{
        justify-content: flex-end;
        .content{
        background-color: #4f04ff21;


    }
}
    .recieved{
    justify-content: flex-start;
    .content{
        background-color:#9900ff20;

    }
}}

 
`;

export const InputContainer = styled.div`
display:grid;
grid-template-columns :5% 95%;
align-items: center;
background-color: #080420;
padding:0 2rem;
padding-bottom: 0.3rem;
@media screen and (min-width: 720px) and (max-width: 1080px){
   padding: 0 1rem;
   gap: 1rem;  
}
.button-container{
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji{
        position: relative;
       svg{
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
       }
       .emoji-picker-react{
        position:absolute;
        top:-350px;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9186f3;
        .emoji-scroll-wrapper::-webkit-scrollbar{
            background-color: #080420;
            width: 5px;
            &-thumb{
                background-color: #9186f3;

            }
        }
        .emoji-categories {
            button{
                filter: contrast(0);

            }
        }
        .emoji-search{
            background-color: transparent;
            border-color: #9186f3;

        }
        .emoji-group:before{
            background-color: #080420;
       }}}}
.input-container{
    width: 100%;
   border-radius: 2rem;
   display: flex;
   align-content: center;
   gap: 2rem;
   background-color:#ffffff34;
   input{
    width: 90%;
    
    background-color: transparent;
    color: white;
    border: none;
    padding-left: 1rem;
    font-size: 1.2rem;
    &::selection{
        background-color: #9186f3;
    }
    &:focus{
        outline: none;
    }
  

   }
   button{
    padding: 0.3rem 2rem;
    border-radius: 2rem;
    display:flex;
    justify-content: center;
    align-itmes: center;
    background-color: #9a86f3;
    border: none;
    @media screen and (min-width: 720px) and (max-width: 1080px){
        padding: 0.3rem 1rem;
        svg{
            font-size: 1rem;

        }
    }
    svg {
        font-size: 2rem;
        color:white;

    }
    
   }
}
`;

export const ContactContainer = styled.div`
display: grid;
grid-template-rows: 10% 75% 15%;
overflow : hidden;
background-color: #080420;
.brand{
    display:flex;
    align-items:center;
    justify-content: center;
    gap: 1rem;
    img{
        height : 2rem;
    }
    h3{
        color: white;
        text-transform: uppercase;
    }}
.contacts{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto; 
    gap: 0.8rem;
    &::-webkit-scrollbar{
        width: 0.2rem;
        &-thumb {
            background-color: #ffffff39;
            width: 0.1rem;
            border-radius: 1rem;
        }
    }

    .contact{
        background-color: #ffffff39;
        min-height:5rem;
        width: 90%;
        cursor: pointer;
        border-radius: 0.2rem;
        padding: 0.4rem;
        gap: 1rem;
        align-items: center;
        display :flex;
        transition: 0.5s ease-in-out;
    .avatar{
        img{
            height: 3rem;
        }
    }
    .username{
        h3{
            color:white;
            
        }

    }
    }
    .selected{
        background-color: #9186f3;

    }

}
.current-user{
    background-color: #0d0d30;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar{
        img{
            height: 4rem;
            max-inline-size: 100%;
        }
    }
    .username{
        h2{
            color:white;

        }


    }
    @media screen and (min-width:720px) and  (max-width: 1080px)
    gap: 0.5rem;
    .username{
        h2{
            font-size: 1rem;
        }
    }
    }

`;

export const LogoutButton = styled.button`
display:flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
border-radius:0.5rem;
background-color: #9a86f3; 
border: none;
cursor: pointer;
svg{
    font-size: 1.3rem;
    color: #ebe7ff;

}
`;

export const MessagesContainer = styled.div`
height: 80%;

`
export const WelcomeContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
flex-direction: column;
color:white;
img{
    height: 20rem;
}
span{
    color:#4e00ff;

}

`;