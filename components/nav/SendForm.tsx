/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import { useState, useRef, useEffect } from "react";
import BackBtn from "./BackBtn";
import{ EmailJSResponseStatus, init, send } from '@emailjs/browser';
import Error from "next/error";

interface Mail {
    name: string,
    email: string,
    message: string,
}

const SendForm:React.FC = () => {

    const [mail, setMail] = useState<Mail>({
        name: '',
        email: '',
        message: '',
    });

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        init('user_KlHkwRpuuPm2dqMdsz6Hs');
    },[]);

    const onChangeHandler = (e: React.ChangeEvent<any>):void => {
        const {name, value} = e.target;
        setMail({...mail, [name]: value});
    }

    const onSubmit = ():void => {
        if(mail.name === '') nameRef.current?.focus();
        else if(mail.email === '') emailRef.current?.focus();
        else if(mail.message === '') messageRef.current?.focus();
        else {
            send('vivid', 'template_fct696p',{...mail})
                .then((res:EmailJSResponseStatus) => {
                    window.location.reload();
                }, (err:Error) => console.log(err));
        }
    }

    return (
        <Wrapper>
            <BackBtn/>
            <Form>
                <Title>CONTACT</Title>
                <Input 
                    name="name" 
                    ref={nameRef} 
                    placeholder="Name" 
                    onChange={(e) => {onChangeHandler(e)}}
                />
                <Input 
                    name="email" 
                    ref={nameRef} 
                    placeholder="Email" 
                    onChange={(e) => {onChangeHandler(e)}}
                />
                <TextArea 
                    name="message" 
                    ref={messageRef} 
                    placeholder="Message" 
                    onChange={(e) => {onChangeHandler(e)}}
                />
                <div css={submit}>
                    <SendBtn onClick={() => onSubmit()}>SEND</SendBtn>
                </div>
            </Form>
        </Wrapper>
    )
}

export default SendForm;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 85%;
`

const Form = styled.section`
    z-index: 11;
    margin-left: 80px;
    margin-top: 40px;
    width: 35vw;
    height: 75vh;
    background-color: #fff;
    opacity: 0.8;
    border-radius: 1.5rem;
    padding: 1em 1.5em;
    z-index: 2;

    transition: .8s;
    &:hover {
        opacity: 0.9;
        transform: scale(1.01);
    }
`

const Title = styled.h1`
    margin-left: 20px;
    margin-top: 20px;
    font-size: 50px;
    color: rgba(255,74,86, 0.9);
    text-decoration: underline;
`

const Input = styled.input`
    width: 90% !important;
    padding-left: 25px !important;
    margin-bottom: 20px;
    height: 30px;
    border-bottom-colors: none;
    border-left-colors: none;
    border-right-colors: none;
    border-top-colors: none;
    background: none repeat scroll 0 0 transparent;
    border-color: rgba(255,74,86, 0.9);
    border-image: none;
    border-radius: 20px 20px 20px 20px;
    border-style: solid solid solid solid;
    border-width: 1px 1px 1px 1px;
    color: rgba(255,74,86, 0.9);
    font-weight: bold;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1em;
    line-height: 1.4em;
    padding: 5px 8px;
    transition: background-color 0.2s ease 0s;

    &:focus {
        background: none repeat scroll 0 0 rgba(255,74,86, 0.9);
        border-color: rgba(255,74,86, 0.9);
        outline-width: 0;
        color: #fff;
        font-weight: bold;
    }

    &:focus {
        color: #fff;
        font-weight: bold;

        &::placeholder {
            color: #fff;
            font-weight: bold;
        }
    }

    &::placeholder {
        color: rgba(255,74,86, 0.9);
        font-weight: bold;
    }
`

const TextArea = styled.textarea`
    width: 92% !important;
    padding: 15px 0 0 25px !important;
    margin-bottom: 20px;
    height: 250px;
    border-bottom-colors: none;
    border-left-colors: none;
    border-right-colors: none;
    border-top-colors: none;
    background: none repeat scroll 0 0 transparent;
    border-color: rgba(255,74,86, 0.9);
    border-image: none;
    border-radius: 20px 20px 20px 20px;
    border-style: solid solid solid solid;
    border-width: 1px 1px 1px 1px;
    color: rgba(255,74,86, 0.9);
    font-weight: bold;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1em;
    line-height: 1.4em;
    padding: 5px 8px;
    transition: background-color 0.2s ease 0s;

    &:focus {
        background: none repeat scroll 0 0 rgba(255,74,86, 0.9);
        border-color: rgba(255,74,86, 0.9);
        outline-width: 0;
        color: #fff;
        font-weight: bold;
    }

    &:focus {
        color: #fff;
        font-weight: bold;

        &::placeholder {
            color: #fff;
            font-weight: bold;
        }
    }

    &::placeholder {
        color: rgba(255,74,86, 0.9);
        font-weight: bold;
    }
`

const SendBtn = styled.button`
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);
    box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);

    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

    &:hover {
        background-position: 100% 0;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
    }

    &:focus {
        outline: none;
    }
`;

const submit = css`
    float: right;
    bottom: 0;
    transform: translatey(70%);
`


