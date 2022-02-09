/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { init, scripts } from "../../public/styles/config";
import { useScript } from "../../public/js/hooks";
import { useEffect } from "react";


const SendForm:React.FC = () => {
    // const nodemailer = require("nodemailer");

    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: process.env.NEXT_PUBLIC_GMAIL_USER,
    //         password: process.env.NEXT_PUBLIC_GMAIL_PW,
    //     },
    // });

    return (
        <Form>
            <Title>CONTACT</Title>
            <input/>
        </Form>
    )
}

export default SendForm;

const Form = styled.section`
    z-index: 11;
    margin-left: 45px;
    width: 38vw;
    height: 80vh;
    background-color: #fff;
    opacity: 0.85;
    border-radius: 1rem;
    padding: 1em 1.5em;
    z-index: 2;

    transition: .8s;
    &:hover {
        opacity: 0.95;
        transform: scale(1.008);
    }
`

const Title = styled.h1`
    margin-left: 20px;
    margin-top: 20px;
    font-size: 50px;
    text-decoration: underline;
`
