/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import Image from "next/image";

const Space: React.FC = () => {

    return (
        <Container>
            <div id="scene" data-tilt>
                <div data-depth="0.1" css={background}>
                    <Image 
                        src="/img/background.png" 
                        alt="" 
                        layout="fill"
                        loading="eager"
                        priority={true}
                    />
                </div>
                <div data-depth="0.2" css={rock1}>
                    <img src="/img/rock.png" alt=""/>
                </div>
                <div data-depth="1.2" css={earth}>
                    <Image 
                        src="/img/earth.png" 
                        alt="" 
                        layout="fill"
                        loading="eager"
                        priority={true}
                    />
                </div>
                <div data-depth="1.2" css={moon}>
                    <Image 
                        src="/img/moon.png" 
                        alt="" 
                        layout="fill"
                        loading="eager"
                        priority={true}
                    />
                </div>
                <div data-depth="0.1" css={text}>
                    <h1>PLANETS</h1>
                </div>
                <div data-depth="0.4" css={mid}>
                    <Image 
                        src="/img/mid.png" 
                        alt="" 
                        layout="fill"
                        loading="eager"
                        priority={true}
                    />
                </div>
                <div data-depth="0.1" css={foreground}>
                    <Image 
                        src="/img/foreground.png" 
                        alt="" 
                        layout="fill"
                        loading="eager"
                        priority={true}
                    />
                </div>
            </div>
        </Container>
    );
}

export default Space;

const Container = styled.section`
    height: 100vh;
    overflow: hidden;
`;

const background = css`
    z-index: auto;
    width: 110vw;
    height: 110vh;
    & img {
        filter: brightness(0.6);  
    }
`

const rock1 = css`
    position: absolute !important;
    left: 10vw !important;
    top: 20vh !important;
    z-index: 3 !important;

    & img {
        width: 40%;
        filter: brightness(0.5);  
    }
`;

const earth = css`
    z-index: 4 !important;
    width: 400px;
    height: 400px;
    position: absolute;
    left: 34vw !important;
    top: 25vh !important;
    
    & img {
        filter: brightness(0.7);
    }

    @media (max-width: 600px) {
        width: 250px;
        height: 250px;
        left: 25vw !important;
        top: 30vh !important;
    }
`

const text = css`
    z-index: 11 !important;
    & h1 {
        font-family: 'Coolwonder', sans-serif;
        font-size: 5vw;
        color: #fff;
        letter-spacing: 20px;
        position: absolute;
        top: 35vh;
        left: 34vw;
    }

    @media (max-width: 600px) {
        z-index: 20 !important;
        font-family: 'Coolwonder', sans-serif;
        font-size: 5vw;
        color: #fff;
    }
`;

const moon = css`
    z-index: 4 !important;
    width: 200px;
    height: 200px;
    position: absolute;
    left: 60vw !important;
    top: 25vh !important;
    
    & img {
        filter: brightness(0.7);
    }

    @media (max-width: 600px) {
        width: 100px;
        height: 100px;
    }
`

const mid = css`
    position: absolute !important;
    z-index: 3 !important;
    left: -125px !important;
    bottom: -100px !important;
    top: unset !important;

    width: 100%;
    left: -20px;
    top: 20vh !important;
    & img {
        filter: brightness(0.8);
    }
    @media (max-width: 600px) {
        left: -50px !important;
        bottom: -100px !important;
    }
`

const foreground = css`
    position: absolute;
    right: -50px !important;
    bottom: -200px !important;
    top: 0px !important;
    left: unset !important;
    z-index: 5 !important;
    width: 400px;
    height: 110vh;
    
    & img {
        filter: brightness(0.5);
    }
    @media (max-width: 600px) {
        right: -100px !important;
        bottom: -200px !important;
        width: 320px;
    }
`;
