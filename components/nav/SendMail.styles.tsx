/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";
import styled from '@emotion/styled';

export const Container = styled.section`
    z-index: auto;
    display: grid;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
    background-image: url('../../img/background.png');
`
export const falling = keyframes`
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
export const Particle = styled.div`
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


export const launch = keyframes`
    0% {
        bottom: -600px;
    }
    100% {
        bottom: 100%;
    }
`

export const floating = keyframes`
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

export const Rocket = styled.img`
    position: absolute;
    bottom: -600px;
    left: 50%;
    animation: ${launch} 10s infinite;
`

export const Astronaut = styled.img`
    display: block;
    width: 300px;
    heigth:auto;
    left: 78.5%;
    animation: ${floating} 20s linear infinite;
    position: absolute;
`
