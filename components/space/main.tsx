/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect } from "react";
import { scripts, swiper } from "../../public/styles/config";

const Space: React.FC = () => {

    useEffect(() => {
        document.body.style.cssText = `
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            font-family: "Roboto";
            list-css: none;
            box-sizing: border-box;
            background: #000;
        `;

        const script = document.createElement('script');
        scripts.forEach((e) => {
            script.src = e;
            script.async = true;
            document.body.appendChild(script);

            if(e.search('..') >= 0) {
                script.src = e;
                script.type = "text/javascript";
            }
        });
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', swiper);
        document.head.appendChild(link);
        
    },[]);

    return (
        <>
        <nav>
            <div className="logo">Explore.</div>
            <div className="nav-links">
                <ul>
                <li><img src="../../img/linkedin.png" alt="" /></li>
                <li><img src="../../img/facebook.png" alt="" /></li>
                <li><img src="../../img/instagram-logo.png" alt="" /></li>
                </ul>
            </div>
        </nav>

        <section id="sectionone" className="screen">
            <div id="scene">
                <div data-depth="0.1" className="bg">
                    <img src="../../img/background.png" alt="" />
                </div>
                <div data-depth="0.2" className="rock1">
                    <img src="../../img/rock.png" alt="" />
                </div>
                <div data-depth="1.2" className="earth">
                    <img src="../../img/earth.png" alt="" />
                </div>
                
                {/* <Parallax bgImageAlt="" strength={-200}>
                    <Background className="earth">
                        <img src="../../img/earth.png" alt="" />
                    </Background>
                </Parallax> */}
                <div data-depth="0.1" className="text">
                <h1>PLANETS</h1>
                </div>
                <div data-depth="0.4" className="mid">
                    <img src="../../img/mid.png" alt="" />
                </div>
                <div data-depth="0.1" className="fore">
                    <img src="../../img/foreground.png" alt="" />
                </div>
            </div>
        </section>

        <section id="sectiontwo" className="screen">
        <div className="swiper">
            <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slide-number">
                <p><span>Mercury</span></p>
                </div>
                <div className="slide-text">
                <h4><span>01</span></h4>
                </div>
                <div className="slide-detail">
                <p>
                    <span
                    >Mercury is the closest planet to the Sun but, perhaps
                    surprisingly, it does not have the highest temperatures. It is
                    the second densest planet of the Solar System, but also the
                    smallest planet. The structure of Mercury makes it the most
                    similar planet to Earth.
                    </span>
                </p>
                </div>
                <div className="slide-detail-facts">
                <div>
                    <h5>
                    ORBIT PERIOD:
                    <Span>87.97 Earth Days</Span>
                    </h5>
                    <h5>KNOWN MOONS: <Span>None</Span></h5>
                </div>
                </div>
                <div className="slide-img"></div>
            </div>

            <div className="swiper-slide">
                <div className="slide-number">
                <p><span>Venus</span></p>
                </div>
                <div className="slide-text">
                <h4><span>02</span></h4>
                </div>
                <div className="slide-detail">
                <p>
                    <span
                    >Venus is the second planet from the Sun and the
                    sixth-largest. Together with Mercury, they are the only
                    planets without a satellite, even though Mercury is closer to
                    the sun, Venus is the hottest planet.
                    </span>
                </p>
                </div>
                <div className="slide-detail-facts">
                <div>
                    <h5>
                    ORBIT PERIOD:
                    <Span>224.70 Earth days</Span>
                    </h5>
                    <h5>KNOWN MOONS: <Span>None</Span></h5>
                </div>
                </div>
                <div className="slide-img"></div>
            </div>

            <div className="swiper-slide">
                <div className="slide-number">
                <p><span>Earth</span></p>
                </div>
                <div className="slide-text">
                <h4><span>03</span></h4>
                </div>
                <div className="slide-detail">
                <p>
                    <span
                    >Earth is the third planet from the Sun and the fifth largest
                    planet in the Solar System with the highest density. It is
                    currently the only known location where life is present.
                    </span>
                </p>
                </div>
                <div className="slide-detail-facts">
                <div>
                    <h5>
                    ORBIT PERIOD:
                    <Span>365.26 Earth days</Span>
                    </h5>
                    <h5>KNOWN MOONS: <Span>1</Span></h5>
                </div>
                </div>
                <div className="slide-img"></div>
            </div>

            <div className="swiper-slide">
                <div className="slide-number">
                <p><span>Mars</span></p>
                </div>
                <div className="slide-text">
                <h4><span>04</span></h4>
                </div>
                <div className="slide-detail">
                <p>
                    <span
                    >Mars is the fourth planet from the Sun and the
                    second-smallest planet with a thin atmosphere, having the
                    surface features reminiscent both of the impact craters of the
                    Moon, and the valleys, deserts and polar ice caps of Earth.
                    </span>
                </p>
                </div>
                <div className="slide-detail-facts">
                <div>
                    <h5>
                    ORBIT PERIOD:
                    <Span>686.98 Earth days</Span>
                    </h5>
                    <h5>KNOWN MOONS: <Span>2</Span></h5>
                </div>
                </div>
                <div className="slide-img"></div>
            </div>

            <div className="swiper-slide">
                <div className="slide-number">
                <p><span>Jupiter</span></p>
                </div>
                <div className="slide-text">
                <h4><span>05</span></h4>
                </div>
                <div className="slide-detail">
                <p>
                    <span
                    >Jupiter is the fifth planet from the Sun and the largest
                    planet of the Solar System. It is the oldest planet of the
                    Solar System thus it was the first to take shape out of the
                    remains of the solar nebula.
                    </span>
                </p>
                </div>
                <div className="slide-detail-facts">
                <div>
                    <h5>
                    ORBIT PERIOD:
                    <Span>4,332.82 Earth days</Span>
                    </h5>
                    <h5>KNOWN MOONS: <Span>67</Span></h5>
                </div>
                </div>
                <div className="slide-img"></div>
            </div>

            <div className="swiper-slide">
                <div className="slide-number">
                <p><span>Saturn</span></p>
                </div>
                <div className="slide-text">
                <h4><span>06</span></h4>
                </div>
                <div className="slide-detail">
                <p>
                    <span
                    >Saturn is the sixth planet from the Sun, with the largest
                    planetary rings in the Solar System. It is the second-largest
                    planet after Jupiter, and recently, with many other moons
                    being discovered, it surpassed the number of Jupiter’s moons.
                    </span>
                </p>
                </div>
                <div className="slide-detail-facts">
                <div>
                    <h5>
                    ORBIT PERIOD:
                    <Span>10,755.70 Earth days</Span>
                    </h5>
                    <h5>KNOWN MOONS: <Span>62</Span></h5>
                </div>
                </div>
                <div className="slide-img"></div>
            </div>


            <div className="swiper-slide">
                <div className="slide-number">
                <p><span>Uranus</span></p>
                </div>
                <div className="slide-text">
                <h4><span>07</span></h4>
                </div>
                <div className="slide-detail">
                <p>
                    <span
                    >Uranus is the seventh planet discovered in the Solar System
                    that also led to the discovery of the last planet, Neptune
                    they are both referred to as ice giants.
                    </span>
                </p>
                </div>
                <div className="slide-detail-facts">
                <div>
                    <h5>
                    ORBIT PERIOD:
                    <Span>30,687.15 Earth days</Span>
                    </h5>
                    <h5>KNOWN MOONS: <Span>27</Span></h5>
                </div>
                </div>
                <div className="slide-img"></div>
            </div>

            <div className="swiper-slide">
                <div className="slide-number">
                <p><span>Neptune</span></p>
                </div>
                <div className="slide-text">
                <h4><span>08</span></h4>
                </div>
                <div className="slide-detail">
                <p>
                    <span
                    >Neptune is the fourth largest and the farthest planet of the
                    Solar System with the most powerful wind speeds out of all the
                    planets. It is the smallest of the gas giants.
                    </span>
                </p>
                </div>
                <div className="slide-detail-facts">
                <div>
                    <h5>
                    ORBIT PERIOD:
                    <Span>60,190.03 Earth days</Span>
                    </h5>
                    <h5>KNOWN MOONS: <Span>14</Span></h5>
                </div>
                </div>
                <div className="slide-img"></div>
            </div>
            </div>
        </div>

        <div>
            <div className="rockbg1">
                <img src="../../img/rock.png" alt=""/>
            </div>
            <div className="swiper-pagination"></div>
        </div>
        </section>
          
        </>
    );
}

export default Space;

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

const Section = styled.section`
    height: 100vh;
    overflow: hidden;
`;

const background = css`
    & img {
        width: 110vw;
        height: 110vh;
        filter: brightness(0.6);  
    }
`

const rock1 = css`
    position: absolute !important;
    left: 10vw !important;
    top: 20vh !important;

    & img {
        width: 40%;
        filter: brightness(0.5);  
    }
`;

const earth = css`
    & img {
        width: 400px;
        height: 400px;
        position: absolute;
        left: 34vw;
        top: 25vh;
        z-index: 1;
        filter: brightness(0.7);
    }
`

const section_two  = css`
    width: 100%;
    height: 100vh;
    position: relative;
`

const Span = styled.span`
    opacity: 0.8;
`;