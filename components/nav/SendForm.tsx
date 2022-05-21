/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import BackBtn from "./BackBtn";
import { EmailJSResponseStatus, init, send } from '@emailjs/browser';
import Error from "next/error";
import { Wrapper, Form, Title, Input, TextArea, SendBtn } from './SendForm.styles';
import Modal from "./Popup";
import { Portal } from "./Portal";

interface Mail {
    name: string,
    email: string,
    message: string,
}

const SendForm: React.FC = () => {

    const [mail, setMail] = useState<Mail>({
        name: '',
        email: '',
        message: '',
    });
    const [toggle, setToggle] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false)

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        init('user_KlHkwRpuuPm2dqMdsz6Hs');
    }, []);

    useEffect(() => {

    }, [error]);

    const onChangeHandler = (e: React.ChangeEvent<any>): void => {
        const { name, value } = e.target;
        setMail({ ...mail, [name]: value });
    }

    const validateEmail = () => {
        const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return regex.test(mail.email);
    }

    const onCloseHandler = () => {
        setToggle(!toggle);
    }

    const renderPortal = (elementId: string, title: string, content: string) => {
        return (
            <Portal
                elementId={elementId}
                child={
                    <Modal
                        toggle={toggle}
                        onClose={onCloseHandler}
                        title={title}
                        content={content}
                    />}
            />
        );
    }

    const onSubmit = (): void => {

        if (!mail.name) nameRef.current?.focus();
        else if (!mail.email || !validateEmail()) emailRef.current?.focus();
        else if (!mail.message) messageRef.current?.focus();
        else {
            send('vivid', 'template_fct696p', { ...mail })
                .then((res: EmailJSResponseStatus) => {
                    setToggle(!toggle);
                }, (err: Error) => {
                    setError(!error);
                    console.log(err);
                });
        }
    }

    return (
        <Wrapper>
            <BackBtn />
            <Form css={form}>
                <Title css={title}>CONTACT</Title>
                <Input
                    css={input}
                    name="name"
                    ref={nameRef}
                    placeholder="Name"
                    onChange={(e) => { onChangeHandler(e) }}
                />
                <Input
                    css={input}
                    name="email"
                    ref={emailRef}
                    placeholder="Email"
                    onChange={(e) => { onChangeHandler(e) }}
                />
                <TextArea
                    css={input}
                    name="message"
                    ref={messageRef}
                    placeholder="Message"
                    onChange={(e) => { onChangeHandler(e) }}
                />
                <div css={submit}>
                    <SendBtn onClick={() => onSubmit()}>SEND</SendBtn>
                </div>
            </Form>
            {toggle &&
                renderPortal(
                    "portal",
                    error ? "메일 전송 실패" : "메일 전송 완료",
                    error ? "오류가 발생했습니다 :( 빠른 시일에 개선할게요!" : "감사합니다 :)"
                )
            }
        </Wrapper>
    )
}

export default SendForm;


const title = css`
    @media (max-width: 600px) {
        margin-left: 10px;
    }
`

const submit = css`
    float: right;
    bottom: 0;
    transform: translatey(70%);
`

const form = css`
    @media (max-width: 600px) {
        margin-left: 25px;
        margin-top: 25px;
        width: 250px;
        height: 75vh;
        padding: 0.5em 1em 0.5em 1em;

        overflow-y: auto;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`

const input = css`
    @media (max-width: 600px) {
        width: 85% !important;
    }
`


