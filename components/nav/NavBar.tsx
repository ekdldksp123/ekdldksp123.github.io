/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import Image from 'next/image';

interface Props {
    visible: boolean,
}

const NavBar:React.FC<Props> = ({visible}) => {
    
    return visible 
    ? <></>
    :
    (
        <Nav>
            <div css={logo}>Explore.</div>
            <Links>
                <Link>
                    <Image 
                        src="/img/github.png" 
                        alt="git" 
                        width={45} 
                        height={45} 
                        onClick={() => window.open("https://github.com/ekdldksp123")}
                        css={icon}
                        loading="eager"
                        priority={true}
                    />
                </Link>
                <Link>
                    <Image 
                        src="/img/gmail.png" 
                        id="gmail"
                        alt="" 
                        width={45} 
                        height={45} 
                        css={icon}
                        loading="eager"
                        priority={true}
                    />
                </Link>
                <Link>
                    <Image 
                        src="/img/tistory.png" 
                        alt="tistory" 
                        width={45} 
                        height={45} 
                        onClick={() => window.open("https://vincode.tistory.com/")}
                        css={icon}
                        loading="eager"
                        priority={true}
                    />
                </Link>
            </Links>
        </Nav>
    );
}

export default NavBar;

const Nav = styled.nav`
    position: fixed !important;
    top: 0;
    left: 0;
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
    justify-content: space-between;
`

const Link = styled.li`
    padding: 0 4px;
    list-css: none;

    & img {
        transform: scale(0.5);
    }
`

const icon = css`
    transition: .2s;
    &:hover {
        transform: scale(1.008);
        cursor: pointer;
    }
`