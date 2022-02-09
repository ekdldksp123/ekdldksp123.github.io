/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { init, scripts } from "../../public/styles/config";
import { useScript } from "../../public/js/hooks";
import { useEffect } from "react";

type Visible = {
    isVisible: boolean,
}

const SendMailForm: React.FC<Visible> = ({isVisible}) => {

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
            <Form>

            </Form>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            { isVisible && <Rocket src="https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png"/> }
        </Container>
    );
}

export default SendMailForm;


const falling = keyframes`
    0%
    {
        transform: translateY(0);
        opacity: 1;
    }
    70%
    {
        opacity: 1;

    }
    100%
    {
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
`;

const Star = styled.span`
    z-index: 2;
    position: absolute;
    top: -250px;
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1)  ;
    animation: ${falling} linear infinite;

    &:before {
        content: '';
        z-index: 2;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 300px;
        height: 1px;
        background: linear-gradient(90deg, #fff, transparent);
    }
`

const Form = styled.section`
    z-index: 11;
    margin-left: 45px;
    width: 45vw;
    height: 80vh;
    background-color:rgba(255, 255, 255, 0.55);
    border-radius: 1rem;
    padding: 1em 1.5em;
    z-index: 2;

    transition: .4s;
    &:hover {
        background-color:rgba(255, 255, 255, 0.85);
        transform: scale(1.008);
    }
`
const launch = keyframes`
    0% {
        bottom: -600px;
    }

    50% {
        bottom: 25%;
    }

    100% {
        bottom: 100%;
    }
`

const Rocket = styled.img`
    position: absolute;
    bottom: -600px;
    left: 55%;
    animation: ${launch} 10s infinite;
`




