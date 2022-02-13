/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';

const BackBtn:React.FC = () => {
    return (
        <Back id="back">
            <Sliding>
                <Arrow/>
            </Sliding>
            <Sliding css={css`animation-delay: 1s;`}>
                <Arrow/>
            </Sliding>
            <Sliding css={css`animation-delay: 2s;`}>
                <Arrow/>
            </Sliding>
        </Back>
    );
}

export default BackBtn;

const Back = styled.div`
    margin-left: 65px;
    margin-bottom: 25px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const slide = keyframes`
    0% { opacity:0; transform: translateX(15px); }	
    20% { opacity:1; transform: translateX(9px); }	
    80% { opacity:1; transform: translateX(-9px); }	
    100% { opacity:0; transform: translateX(-15px); }	
}`

const Sliding = styled.div`
    position: absolute;
    animation: ${slide} 3s linear infinite;
`

const Arrow = styled.div`
    width: 20px;
    height: 20px;
    border: 3px solid;
    border-color: #06A8FF transparent transparent #06A8FF;
    #box-shadow: 0 0 60px 30px #fff, 0 0 100px 60px #fff, 0 0 140px 90px #fff;
    transform: rotate(-45deg);
`
