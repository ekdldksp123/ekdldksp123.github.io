/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
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
} from "./planets.styles";

const Planets: React.FC = () => {
  return (
    <Container className="screen">
      <Swiper className="swiper">
        <SwiperWrapper className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <SlideNumber className="slide-number">
              <p>
                <span>Mercury</span>
              </p>
            </SlideNumber>
            <SlideText className="slide-text">
              <h4>
                <span>01</span>
              </h4>
            </SlideText>
            <SlideDetail className="slide-detail" css={detail}>
              <p>
                <span>
                  Mercury is the closest planet to the Sun but, perhaps
                  surprisingly, it does not have the highest temperatures. It is
                  the second densest planet of the Solar System, but also the
                  smallest planet. The structure of Mercury makes it the most
                  similar planet to Earth.
                </span>
              </p>
            </SlideDetail>
            <SlideDetailFacts className="slide-detail-facts">
              <div>
                <h5>
                  ORBIT PERIOD:
                  <Span> 87.97 Earth Days</Span>
                </h5>
                <h5>
                  KNOWN MOONS: <Span>None</Span>
                </h5>
              </div>
            </SlideDetailFacts>
            <SlideImage className="slide-img"></SlideImage>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <SlideNumber className="slide-number">
              <p>
                <span>Venus</span>
              </p>
            </SlideNumber>
            <SlideText className="slide-text">
              <h4>
                <span>02</span>
              </h4>
            </SlideText>
            <SlideDetail className="slide-detail" css={detail}>
              <p>
                <span>
                  Venus is the second planet from the Sun and the sixth-largest.
                  Together with Mercury, they are the only planets without a
                  satellite, even though Mercury is closer to the sun, Venus is
                  the hottest planet.
                </span>
              </p>
            </SlideDetail>
            <SlideDetailFacts className="slide-detail-facts">
              <div>
                <h5>
                  ORBIT PERIOD:
                  <Span> 224.70 Earth days</Span>
                </h5>
                <h5>
                  KNOWN MOONS: <Span>None</Span>
                </h5>
              </div>
            </SlideDetailFacts>
            <SlideImage className="slide-img"></SlideImage>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <SlideNumber className="slide-number">
              <p>
                <span>Earth</span>
              </p>
            </SlideNumber>
            <SlideText className="slide-text">
              <h4>
                <span>03</span>
              </h4>
            </SlideText>
            <SlideDetail className="slide-detail" css={detail}>
              <p>
                <span>
                  Earth is the third planet from the Sun and the fifth largest
                  planet in the Solar System with the highest density. It is
                  currently the only known location where life is present.
                </span>
              </p>
            </SlideDetail>
            <SlideDetailFacts className="slide-detail-facts">
              <div>
                <h5>
                  ORBIT PERIOD:
                  <Span> 365.26 Earth days</Span>
                </h5>
                <h5>
                  KNOWN MOONS: <Span>1</Span>
                </h5>
              </div>
            </SlideDetailFacts>
            <SlideImage className="slide-img"></SlideImage>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <SlideNumber className="slide-number">
              <p>
                <span>Mars</span>
              </p>
            </SlideNumber>
            <SlideText className="slide-text">
              <h4>
                <span>04</span>
              </h4>
            </SlideText>
            <SlideDetail className="slide-detail" css={detail}>
              <p>
                <span>
                  Mars is the fourth planet from the Sun and the second-smallest
                  planet with a thin atmosphere, having the surface features
                  reminiscent both of the impact craters of the Moon, and the
                  valleys, deserts and polar ice caps of Earth.
                </span>
              </p>
            </SlideDetail>
            <SlideDetailFacts className="slide-detail-facts">
              <div>
                <h5>
                  ORBIT PERIOD:
                  <Span> 686.98 Earth days</Span>
                </h5>
                <h5>
                  KNOWN MOONS: <Span>2</Span>
                </h5>
              </div>
            </SlideDetailFacts>
            <SlideImage className="slide-img"></SlideImage>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <SlideNumber className="slide-number">
              <p>
                <span>Jupiter</span>
              </p>
            </SlideNumber>
            <SlideText className="slide-text">
              <h4>
                <span>05</span>
              </h4>
            </SlideText>
            <SlideDetail className="slide-detail" css={detail}>
              <p>
                <span>
                  Jupiter is the fifth planet from the Sun and the largest
                  planet of the Solar System. It is the oldest planet of the
                  Solar System thus it was the first to take shape out of the
                  remains of the solar nebula.
                </span>
              </p>
            </SlideDetail>
            <SlideDetailFacts className="slide-detail-facts">
              <div>
                <h5>
                  ORBIT PERIOD:
                  <Span> 4,332.82 Earth days</Span>
                </h5>
                <h5>
                  KNOWN MOONS: <Span>67</Span>
                </h5>
              </div>
            </SlideDetailFacts>
            <SlideImage className="slide-img"></SlideImage>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <SlideNumber className="slide-number">
              <p>
                <span>Saturn</span>
              </p>
            </SlideNumber>
            <SlideText className="slide-text">
              <h4>
                <span>06</span>
              </h4>
            </SlideText>
            <SlideDetail className="slide-detail" css={detail}>
              <p>
                <span>
                  Saturn is the sixth planet from the Sun, with the largest
                  planetary rings in the Solar System. It is the second-largest
                  planet after Jupiter, and recently, with many other moons
                  being discovered, it surpassed the number of Jupiter’s moons.
                </span>
              </p>
            </SlideDetail>
            <SlideDetailFacts className="slide-detail-facts">
              <div>
                <h5>
                  ORBIT PERIOD:
                  <Span> 10,755.70 Earth days</Span>
                </h5>
                <h5>
                  KNOWN MOONS: <Span>62</Span>
                </h5>
              </div>
            </SlideDetailFacts>
            <SlideImage className="slide-img"></SlideImage>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <SlideNumber className="slide-number">
              <p>
                <span>Uranus</span>
              </p>
            </SlideNumber>
            <SlideText className="slide-text">
              <h4>
                <span>07</span>
              </h4>
            </SlideText>
            <SlideDetail className="slide-detail" css={detail}>
              <p>
                <span>
                  Uranus is the seventh planet discovered in the Solar System
                  that also led to the discovery of the last planet, Neptune
                  they are both referred to as ice giants.
                </span>
              </p>
            </SlideDetail>
            <SlideDetailFacts className="slide-detail-facts">
              <div>
                <h5>
                  ORBIT PERIOD:
                  <Span> 30,687.15 Earth days</Span>
                </h5>
                <h5>
                  KNOWN MOONS: <Span>27</Span>
                </h5>
              </div>
            </SlideDetailFacts>
            <SlideImage className="slide-img"></SlideImage>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <SlideNumber className="slide-number">
              <p>
                <span>Neptune</span>
              </p>
            </SlideNumber>
            <SlideText className="slide-text">
              <h4>
                <span>08</span>
              </h4>
            </SlideText>
            <SlideDetail className="slide-detail" css={detail}>
              <p>
                <span>
                  Neptune is the fourth largest and the farthest planet of the
                  Solar System with the most powerful wind speeds out of all the
                  planets. It is the smallest of the gas giants.
                </span>
              </p>
            </SlideDetail>
            <SlideDetailFacts className="slide-detail-facts">
              <div>
                <h5>
                  ORBIT PERIOD:
                  <Span> 60,190.03 Earth days</Span>
                </h5>
                <h5>
                  KNOWN MOONS: <Span>14</Span>
                </h5>
              </div>
            </SlideDetailFacts>
            <SlideImage className="slide-img"></SlideImage>
          </SwiperSlide>
        </SwiperWrapper>
      </Swiper>

      <div>
        <BackgroundRock css={rock} className="rockbg1">
          <img src="../../img/rock.png" alt="" />
        </BackgroundRock>
        <Pagination css={pagination} className="swiper-pagination"></Pagination>
      </div>
    </Container>
  );
};

export default Planets;

const detail = css`
  font-size: 15px;
  @media (min-width: 600px) {
    font-size: 21px;
  }
`;

const pagination = css`
  @media (max-width: 600px) {
    font-size: 18px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    & .swiper-pagination-bullet {
      opacity: 0.2;
      outline: none;
    }

    & .swiper-pagination-bullet-active {
      color: #fff;
      opacity: 1;
      cursor: pointer;
    }
    &.swiper-pagination-bullet: active {
      background: transparent;
    }
  }
`;

const rock = css`
  @media (max-width: 600px) {
    position: absolute;
    transform: scale(0.2);
    filter: brightness(0.3);
    top: 0vh;
    left: -25px;
    z-index: 1;
  }
`;
