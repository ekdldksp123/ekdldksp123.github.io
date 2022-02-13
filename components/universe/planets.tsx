/** @jsxImportSource @emotion/react */
import {
    Container,
    Swiper,
    SwiperWrapper,
    SwiperSlide,
    SlideNumber,
    SlideText,
    SlideDetail,
    SlideDetailFacts,
    SlideImage,
    Span,
    BackgroundRock,
    Pagination,
} from './Planets.styles';

const Planets: React.FC = () => {
    return (
        <Container className="screen">
        <Swiper className="swiper">
            <SwiperWrapper className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                    <SlideNumber className="slide-number">
                        <p><span>Mercury</span></p>
                    </SlideNumber>
                    <SlideText className="slide-text">
                        <h4><span>01</span></h4>
                    </SlideText>
                    <SlideDetail className="slide-detail">
                        <p>
                            <span>
                            Mercury is the closest planet to the Sun but, perhaps
                            surprisingly, it does not have the highest temperatures. It is
                            the second densest planet of the Solar System, but also the
                            smallest planet. The structure of Mercury makes it the most
                            similar planet to Earth. 
                            <br/>
                            안녕하세요, 저는 2년차 주니어 개발자 김빈채입니다 🚀
                            </span>
                        </p>
                    </SlideDetail>
                    <SlideDetailFacts className="slide-detail-facts">
                    <div>
                        <h5>
                        ORBIT PERIOD:
                        <Span> 87.97 Earth Days</Span>
                        </h5>
                        <h5>KNOWN MOONS: <Span>None</Span></h5>
                    </div>
                    </SlideDetailFacts>
                    <SlideImage className="slide-img"></SlideImage>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <SlideNumber className="slide-number">
                        <p><span>Venus</span></p>
                    </SlideNumber>
                    <SlideText className="slide-text">
                        <h4><span>02</span></h4>
                    </SlideText>
                        <SlideDetail className="slide-detail">
                        <p>
                            <span>
                            Venus is the second planet from the Sun and the
                            sixth-largest. Together with Mercury, they are the only
                            planets without a satellite, even though Mercury is closer to
                            the sun, Venus is the hottest planet. 
                            <br/>
                            저는 2020.11 ~ 부터 야놀자 계열 호텔 및 리조트 솔루션 회사에서 CMS 2.0 프론트 및 백엔드 업무 경력을 쌓아왔어요.
                            </span>
                        </p>
                        </SlideDetail>
                        <SlideDetailFacts className="slide-detail-facts">
                        <div>
                            <h5>
                            ORBIT PERIOD:
                            <Span> 224.70 Earth days</Span>
                            </h5>
                            <h5>KNOWN MOONS: <Span>None</Span></h5>
                        </div>
                        </SlideDetailFacts>
                    <SlideImage className="slide-img"></SlideImage>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <SlideNumber className="slide-number">
                        <p><span>Earth</span></p>
                    </SlideNumber>
                    <SlideText className="slide-text">
                        <h4><span>03</span></h4>
                    </SlideText>
                    <SlideDetail className="slide-detail">
                    <p>
                        <span>
                        Earth is the third planet from the Sun and the fifth largest
                        planet in the Solar System with the highest density. It is
                        currently the only known location where life is present.
                        <br/>
                        포지션으로는 능력있는 프론트엔드, 풀스택을 지향하고, 언어는 자바스크립트를 가장 좋아합니다 🧡
                        </span>
                    </p>
                    </SlideDetail>
                    <SlideDetailFacts className="slide-detail-facts">
                    <div>
                        <h5>
                        ORBIT PERIOD:
                        <Span> 365.26 Earth days</Span>
                        </h5>
                        <h5>KNOWN MOONS: <Span>1</Span></h5>
                    </div>
                    </SlideDetailFacts>
                    <SlideImage className="slide-img"></SlideImage>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <SlideNumber className="slide-number">
                        <p><span>Mars</span></p>
                    </SlideNumber>
                    <SlideText className="slide-text">
                        <h4><span>04</span></h4>
                    </SlideText>
                    <SlideDetail className="slide-detail">
                    <p>
                        <span>
                        Mars is the fourth planet from the Sun and the
                        second-smallest planet with a thin atmosphere, having the
                        surface features reminiscent both of the impact craters of the
                        Moon, and the valleys, deserts and polar ice caps of Earth.
                        <br/>
                        같은 효과 및 기능을 줘도 화면에서 이렇게 매끄럽게, 에러 없이 돌아갈 때가 제일 뿌듯하고 행복해요 💚
                        </span>
                    </p>
                    </SlideDetail>
                    <SlideDetailFacts className="slide-detail-facts">
                    <div>
                        <h5>
                        ORBIT PERIOD:
                        <Span> 686.98 Earth days</Span>
                        </h5>
                        <h5>KNOWN MOONS: <Span>2</Span></h5>
                    </div>
                    </SlideDetailFacts>
                    <SlideImage className="slide-img"></SlideImage>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <SlideNumber className="slide-number">
                        <p><span>Jupiter</span></p>
                    </SlideNumber>
                    <SlideText className="slide-text">
                        <h4><span>05</span></h4>
                    </SlideText>
                    <SlideDetail className="slide-detail">
                    <p>
                        <span>
                        Jupiter is the fifth planet from the Sun and the largest
                        planet of the Solar System. It is the oldest planet of the
                        Solar System thus it was the first to take shape out of the
                        remains of the solar nebula.
                        <br/>
                        더 나아가서 사용자들이 보면서 시각적으로 끌리고 편리하게 이용할 수 있는 어플리케이션을 만들고 싶습니다 💛
                        </span>
                    </p>
                    </SlideDetail>
                    <SlideDetailFacts className="slide-detail-facts">
                    <div>
                        <h5>
                        ORBIT PERIOD:
                        <Span> 4,332.82 Earth days</Span>
                        </h5>
                        <h5>KNOWN MOONS: <Span>67</Span></h5>
                    </div>
                    </SlideDetailFacts>
                    <SlideImage className="slide-img"></SlideImage>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <SlideNumber className="slide-number">
                        <p><span>Saturn</span></p>
                    </SlideNumber>
                    <SlideText className="slide-text">
                        <h4><span>06</span></h4>
                    </SlideText>
                    <SlideDetail className="slide-detail">
                    <p>
                        <span>
                        Saturn is the sixth planet from the Sun, with the largest
                        planetary rings in the Solar System. It is the second-largest
                        planet after Jupiter, and recently, with many other moons
                        being discovered, it surpassed the number of Jupiter’s moons.
                        <br/>
                        제가 주로 사용하는 프레임워크는 React 지만, ReactNative, Svelte 도 겸하고 있습니다. 모바일 화면 개발도 좋아해요 💜
                        </span>
                    </p>
                    </SlideDetail>
                    <SlideDetailFacts className="slide-detail-facts">
                    <div>
                        <h5>
                        ORBIT PERIOD:
                        <Span> 10,755.70 Earth days</Span>
                        </h5>
                        <h5>KNOWN MOONS: <Span>62</Span></h5>
                    </div>
                    </SlideDetailFacts>
                    <SlideImage className="slide-img"></SlideImage>
                </SwiperSlide>


                <SwiperSlide className="swiper-slide">
                    <SlideNumber className="slide-number">
                        <p><span>Uranus</span></p>
                    </SlideNumber>
                    <SlideText className="slide-text">
                        <h4><span>07</span></h4>
                    </SlideText>
                    <SlideDetail className="slide-detail">
                    <p>
                        <span>
                        Uranus is the seventh planet discovered in the Solar System
                        that also led to the discovery of the last planet, Neptune
                        they are both referred to as ice giants.
                        <br/>
                        아 그리고 혹시 아직 상단의 Gmail 아이콘 클릭 안해보셨다면 꼭 눌러봐주세요오 💌
                        </span>
                    </p>
                    </SlideDetail>
                    <SlideDetailFacts className="slide-detail-facts">
                    <div>
                        <h5>
                        ORBIT PERIOD:
                        <Span> 30,687.15 Earth days</Span>
                        </h5>
                        <h5>KNOWN MOONS: <Span>27</Span></h5>
                    </div>
                    </SlideDetailFacts>
                    <SlideImage className="slide-img"></SlideImage>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <SlideNumber className="slide-number">
                        <p><span>Neptune</span></p>
                    </SlideNumber>
                    <SlideText className="slide-text">
                        <h4><span>08</span></h4>
                    </SlideText>
                    <SlideDetail className="slide-detail">
                    <p>
                        <span>
                        Neptune is the fourth largest and the farthest planet of the
                        Solar System with the most powerful wind speeds out of all the
                        planets. It is the smallest of the gas giants.
                        <br/>
                        히든 페이지 보셨나요? :) 그럼 요기까지 제 사이트 봐주셔서 감사합니다❤️
                        </span>
                    </p>
                    </SlideDetail>
                    <SlideDetailFacts className="slide-detail-facts">
                    <div>
                        <h5>
                        ORBIT PERIOD:
                        <Span> 60,190.03 Earth days</Span>
                        </h5>
                        <h5>KNOWN MOONS: <Span>14</Span></h5>
                    </div>
                    </SlideDetailFacts>
                    <SlideImage className="slide-img"></SlideImage>
                </SwiperSlide>
            </SwiperWrapper>
        </Swiper>

        <div>
            <BackgroundRock className="rockbg1">
                <img src="../../img/rock.png" alt=""/>
            </BackgroundRock>
            <Pagination className="swiper-pagination"></Pagination>
        </div>
    </Container>
    );
}

export default Planets;

