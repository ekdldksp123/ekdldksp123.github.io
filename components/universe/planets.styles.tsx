/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
`

export const Pagination = styled.div`
    width: 95%;
    height: 10vh;
    color: #fff;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    font-size: 20px;
    
    & .swiper-pagination-bullet {
        opacity: 0.2;
        outline: none;
    }
    & .swiper-pagination-bullet-active {
        color: #fff;
        opacity: 1;   
        cursor: pointer;
    }
    & .swiper-pagination-bullet: active {
        background: transparent;
    }
`

export const BackgroundRock = styled.div`
    position: absolute;
    transform: scale(0.2);
    filter: brightness(0.3);
    top: 20vh;
    left: 0;
    z-index: 1;
`

export const Swiper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 50px 0;
`

export const SwiperWrapper = styled.div`
    transition-delay: 0.5s;
`

export const SwiperSlide = styled.div`
    height: 400px !important;
    width: 90% !important;
    background: transparent;
    &:nth-child(1) .slide-img {
        background-image: url("/img/mercury.png");
    }
    &:nth-child(2) .slide-img {
        background-image: url("/img/venus.png");
    }
    &:nth-child(3) .slide-img {
        background-image: url("/img/earth1.png");
    }
    &:nth-child(4) .slide-img {
        background-image: url("/img/mars.png");
    }
    &:nth-child(5) .slide-img {
        background-image: url("/img/jupiter.png");
    }
    &:nth-child(6) .slide-img {
        background-image: url("/img/saturn.png");
    }
    &:nth-child(7) .slide-img {
        background-image: url("/img/uranus.png");
    }
    &:nth-child(8) .slide-img {
        background-image: url("/img/neptune.png");
    }
`

export const SlideImage = styled.div`
    background-position: "center";
    background-repeat: no-repeat !important;
    background-size: contain;
    width: 30%;
    height: 100%;
    float: left;
`

export const SlideNumber = styled.div`
    position: absolute;
    top: -30px;
    left: 30%;
    width: 200px;
    height: 120px;
    overflow: hidden;
    z-index: 10;
    & p {
        font-size: 40px;
        font-family: 'alpha-centauri-Medium' !important;
        color: #fff;
        position: relative;
    }
    & span {
        position: absolute;
    }
`

export const SlideDetail = styled.div`
    position: absolute;
    top: 130px;
    left: 30%;
    z-index: 10;
    width: 50%;
    height: 200px;
    overflow-y: auto;
    
    & p {
        font-size: 15px;
        color: #fff;
        position: relative;
        opacity: 0.8;
        line-height: 30px;
    }
    & span {
        position: absolute;
    }

    &::-webkit-scrollbar {
        width: 4px;
    }
     
    &::-webkit-scrollbar-track {
        background-color: transparent;
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: #6d6d6d; 
    }
`

export const SlideDetailFacts = styled.div`
    position: absolute;
    top: 325px;
    left: 30%;
    z-index: 10;
    width: 50%;
    height: 200px !important;
    overflow-y: auto;
    color: #fff;
    
    & div {
        display: flex;
        position: relative;
    }
    & h5 {
        margin-right: 20px;
    }
`

export const SlideText = styled.div`
    position: absolute;
    top: -150px;
    left: 22%;
    z-index: 9;
    width: 200px;
    height: 400px;
    overflow: hidden;
    opacity: 0.1 !important;
    & h4 {
        color: #fff;
        font-size: 100px;
        position: relative;
    }
    & span {
        position: absolute;
    }
`

export const Span = styled.span`
    opacity: 0.8;
`;