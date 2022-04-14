import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
width: 100%;
height: 100vh;
background: #000;
color: #fff;
`
export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const FormContainer = styled.div`
width: min(400px, 100%);
display: flex;
flex-direction: column;
padding: 40px 15px;
background: rgba(255, 255, 255, 0.1);
border-radius: 10px;

@media screen and (max-width: 375px) {
    width: min(350px, 100%);
}

@media screen and (max-width: 320px) {
    width: min(300px, 100%);
}

`
export const Form = styled.form`
display: flex;
flex-direction: column;
`
export const Title = styled.h2`
margin-bottom: 5px;
`
export const Para = styled.p`
margin-bottom: 10px;
color: #666;
`
export const FormInput = styled.input`
padding: 12px 10px;
margin-bottom: 10px;
font-size: 18px;
border-radius: 5px;
border: none;
outline: none;
color: #333;
`

export const InputError = styled.p`
color: red;
margin-bottom: 8px;
`
export const FormButton = styled.button`
outline: none;
border: none;
padding: 12px 18px;
border-radius: 5px;
background-color: #02c38e;
color: #fff;
font-size: 18px;
font-weight: bold;
cursor: pointer;
transition: all 350ms ease-in-out;

&:hover {
    transform: scale(0.98);
}
`

export const Forgot = styled(Link)`
color: #02c38e;
font-weight: bold;
text-align: center;
margin-top: 15px;
`