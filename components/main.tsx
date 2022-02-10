/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import Planets from "./universe/planets";
import Space from "./universe/space";
import { useEffect } from "react";
import { init, scripts } from "../public/styles/config";
import { useScript } from "../public/js/hooks";
import NavBar from "./nav/NavBar";
import SendMail from "./nav/SendMail";
import { useState } from "react";

const Main: React.FC = () => {
    
    const [visible, setIsVisible] = useState<boolean>(false);

    const parallax = useScript(scripts[1]);
    const gsap = useScript(scripts[0]);
    const swiper = useScript(scripts[2]);

    useEffect(() => {
        init();
        if(swiper === "ready" && parallax === "ready") {
            const script = document.createElement('script'); 
            script.src = scripts[3];
            script.async = true;
            document.body.appendChild(script);
        }
    },[parallax, swiper, gsap]);


    useEffect(() => {
        let gmail: HTMLElement = document.getElementById("gmail");
        gmail.addEventListener('click', (e:Event) => {
            const slide: HTMLElement = document.getElementById("from");
            slide.parentElement.style.transform = `translateX(-100%)`;
            setIsVisible(true);
        });
        let arrow: HTMLElement = document.getElementById("back");
        arrow.addEventListener('click', (e:Event) => {
            const slide: HTMLElement = document.getElementById("to");
            slide.parentElement.style.transform = `translateX(0%)`;
            setIsVisible(false);
        })
    },[]);

    return (
        <>
            <Wrapper>
                <Slide>
                    <Page id="from">
                        <NavBar/>
                        <Space/>
                    </Page>
                    <Page id="to">
                        <SendMail isVisible={visible}/>
                    </Page>
                </Slide>
            </Wrapper>
            <Planets/>
        </>
    );
}

export default Main;

const Wrapper = styled.div`
    width: 100vw;
    height: 100wh;
    overflow: hidden;
`

const Slide = styled.div`
    height: 100% !important;
    display: flex;
    flex-wrap: nowrap;
    transition: all .5s linear;
    transform: translateX(0);
`

const Page = styled.div`
    flex: 0 0 auto;
    height: 100% !important;
    width: 100%;
    transition: 1s;
    left: 0%;
    opacity: 1;
    position: relative;
`



