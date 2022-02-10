/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { init, scripts } from "../../public/styles/config";
import { useScript } from "../../public/js/hooks";
import { useEffect } from "react";
import SendForm from "./SendForm";

type Visible = {
    isVisible: boolean,
}

const SendMail: React.FC<Visible> = ({isVisible}) => {

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

    return (
        <Container id="space">
            <SendForm />
            { isVisible && 
                <>
                    <Rocket src="https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png"/>
                    
                    <Particle css={part1}/>
                    <Particle css={part2}/>
                    <Particle css={part3}/>
                    <Particle css={part4}/>
                    <Particle css={part5}/>
                    <Particle css={part6}/>
                    <Particle css={part7}/>
                    <Particle css={part8}/>
                    <Particle css={part9}/>
                    <Particle css={part10}/>
                </>
            }
            <Astronaut src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"/>
        </Container>
    );
}

export default SendMail;

const falling = keyframes`
    0%{
        transform: translateY(0);
        opacity: 1;
    }
    70%{
        opacity: 1;
    }
    100%{
        transform: translateY(200vh);
        opacity: 0;
    }
`

const Container = styled.section`
    z-index: auto;
    display: grid;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
    background-image: url('../../img/background.png');
`

const Particle = styled.div`
    position:absolute;
    content:"";
    height:100px;
    right:1px;
    top:0px;
    width:1px;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(255,255,255,0.4) 100%); 

    animation-name: ${falling};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`

const part1 = css`
    animation-duration: 5s;
    left:55%;
`

const part2 = css`
    animation-duration: 10s;
    left:90%;
`

const part3 = css`
    animation-duration: 15s;
    left:60%;
`

const part4 = css`
    animation-duration: 5s;
    left:75%;
`

const part5 = css`
    animation-duration: 10s;
    left:82%;
`

const part6 = css`
    animation-duration: 15s;
    left:35%;
`

const part7 = css`
    animation-duration: 5s;
    left:48%;
`

const part8 = css`
    animation-duration: 10s;
    left:65%;
`

const part9 = css`
    animation-duration: 15s;
    left:87%;
`

const part10 = css`
    animation-duration: 5s;
    left:95%;
`


const launch = keyframes`
    0% {
        bottom: -600px;
    }
    100% {
        bottom: 100%;
    }
`

const floating = keyframes`
    0% {
        transform: translateY(0px);
    }
    10%{
        transform: translateY(30px) 
        rotate(10deg);
    }
    20%{
        transform: translateY(60px) 
        rotate(20deg);
    }
    30%{
        transform: translateY(90px) 
        rotate(30deg);
    }
    40%{
        transform: translateY(120px) 
        rotate(20deg);
    }
    50% {
        transform: translateY(150px) 
        rotate(30deg);
    }
    60%{
        transform: translateY(120px) 
        rotate(40deg);
    }
    70%{
        transform: translateY(90px) 
        rotate(10deg);
    }
    80%{
        transform: translateY(60px) 
        rotate(20deg);
    }
    90%{
        transform: translateY(30px) 
        rotate(10deg);
    }
    100% {
        transform: translateY(0px);
    }
`

const Rocket = styled.img`
    position: absolute;
    bottom: -600px;
    left: 50%;
    animation: ${launch} 10s infinite;
`

const Astronaut = styled.img`
    display: block;
    width: 300px;
    heigth:auto;
    left: 78.5%;
    animation: ${floating} 20s linear infinite;
    position: absolute;
`




