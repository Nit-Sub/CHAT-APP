import styled from "styled-components";
export const Container = styled.div
`
height:100vh;
width:100vw;
display:flex;
flex-direction: column;
justify-content: center;
gap:1rem;
align-items:center;
background-color: #131324;
.container{
height:85vh;
width:85vw;
background-color:#00000076;
display: grid;
grid-template-columns: 25% 75% ;
@media screen and (min-width:720px) and  (max-width: 1080px)
grip-template-columns: 35% 65%;
}

`;

export const FormContainer = styled.div`
height:100vh;
width :100vw;
display: flex;
flex-direction:column;
justify-content : center;
gap: 1rem;
align-items: center;
background-color: #131324;
.brand{
    display:flex;
    align-items:center;
    gap:1rem;
    justify-content:center;
    img{
        height:5rem;
    }
    h1{
        color:white;
        text-transform:uppercase;
       
    }}
    form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 3rem 5 rem;
        input{
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid #4e0eff;
            border-radius:.4rem;
            color: white;
            width: 100%;
            font-size : 1rem;
            &:focus{
                border :0.1rem solid #997af0;
                outline: none;

            }

        }
        button{
            background-color: #997af0;
            color: white;
            padding : 1rem 2rem ;
            border : none;
            font-weight : bold;
            cursor:pointer;
            border-radius: 0.4rem;
            font-size: 1 rem;
            text-transform : uppercase;
            transition : 0.5s ease-in-out;
            &:hover{
                background-color: #4e0eff;
            }

        }
        span{
            color: white;
            text-transform: uppercase;
            a{
                color: #4e0eff;
                text-decoration: none;
                font-weight: bold;
            }
        }

    }


`;

export const FormContainerRegister = styled.div`
height:100vh;
width :100vw;
display: flex;
flex-direction:column;
justify-content : center;
gap: 1rem;
align-items: center;
background-color: #131324;
.brand{
    display:flex;
    align-items:center;
    gap:1rem;
    justify-content:center;
    img{
        height:5rem;
    }
    h1{
        color:white;
        text-transform:uppercase;
       
    }}
    form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 3rem 5 rem;
        input{
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid #4e0eff;
            border-radius:.4rem;
            color: white;
            width: 100%;
            font-size : 1rem;
            &:focus{
                border :0.1rem solid #997af0;
                outline: none;

            }

        }
        button{
            background-color: #997af0;
            color: white;
            padding : 1rem 2rem ;
            border : none;
            font-weight : bold;
            cursor:pointer;
            border-radius: 0.4rem;
            font-size: 1 rem;
            text-transform : uppercase;
            transition : 0.5s ease-in-out;
            &:hover{
                background-color: #4e0eff;
            }

        }
        span{
            color: white;
            text-transform: uppercase;
            a{
                color: #4e0eff;
                text-decoration: none;
                font-weight: bold;
            }
        }

    }


`;

export const ContainerSetAvatar = styled.div
`display:flex;
justify-content:center;
align-items: center;
flex-direction: column;
gap: 3rem;
background-color : #131324;
height: 100vh;
width:100vw;
.loader{
max-inline-size:100%
}
.title-container{
h1{
    color: white;
}
}
.avatars{
display: flex;
gap: 2rem;
.avatar{
    border:0.4rem solid transparent;
    padding: 0.4rem;
    border-radius: 5rem;
    display: flex;
    justify-content : center;
    align-item: center;
    transition: 0.5s ease-in-out;    
img{
    height:6rem;

}}


.selected{
    border: 0.4rem solid #4e0eff
}}

.submit-btn{
background-color: #997af0;
color: white;
padding : 1rem 2rem ;
border : none;
font-weight : bold;
cursor:pointer;
border-radius: 0.4rem;
font-size: 1 rem;
text-transform : uppercase;
transition : 0.5s ease-in-out;
&:hover{
    background-color: #4e0eff;
}}
`;
