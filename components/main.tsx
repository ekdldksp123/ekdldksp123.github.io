/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import Planets from "./universe/planets";
import Space from "./universe/space";
import { useEffect } from "react";
import { init, scripts } from "../public/styles/config";
import { useScript } from "../public/js/hooks";

const Main: React.FC = () => {
    
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
    },[parallax, swiper, gsap])

    return (
        <>
        <Nav>
            <div css={logo}>Explore.</div>
            <Links>
                <Link><img src="../../img/linkedin.png" alt="" /></Link>
                <Link><img src="../../img/facebook.png" alt="" /></Link>
                <Link><img src="../../img/instagram-logo.png" alt="" /></Link>
            </Links>
        </Nav>
        <Space />
        <Planets />
    </>
    );
}

export default Main;

const Nav = styled.nav`
    position: fixed;
    z-index: 100;
    height: 8vh;
    width: 96%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
`;

const logo = css`
    color: #fff;
    font-weight: 600;
    font-size: 16px;
`

const Links = styled.ul`
    display: flex;
    flex-direction: row;
`

const Link = styled.li`
    padding: 0 4px;
    list-css: none;

    & img {
        transform: scale(0.5);
    }
`


