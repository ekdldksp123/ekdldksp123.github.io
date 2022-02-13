/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { init, scripts } from "../../public/styles/config";
import { useScript } from "../../public/js/hooks";
import { useEffect } from "react";
import SendForm from "./SendForm";
import { Container, Particle, Rocket, Astronaut } from './SendMail.styles';

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
