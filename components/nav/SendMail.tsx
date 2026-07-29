/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import SendForm from "./SendForm";
import { Container, Particle, Rocket, Astronaut } from './SendMail.styles';

type Props = {
    isVisible: boolean,
}

const SendMail: React.FC<Props> = ({isVisible}) => {

    return (
        <Container id="space">
            <SendForm />
            { isVisible && 
                <>
                    <Rocket css={rocket} src="https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png"/>

                    {PARTICLES.map((particle, index) => (
                        <Particle
                            key={index}
                            css={css`
                                animation-duration: ${particle.duration}s;
                                left: ${particle.left}%;
                            `}
                        />
                    ))}
                </>
            }
            <Astronaut css={astronaut} src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"/>
        </Container>
    );
}

export default SendMail;

const rocket = css`
    @media (max-width: 600px) {
        left: 25%;
    }
`

const astronaut = css`
    @media (max-width: 600px) {
        left: 55%;
    }
`

// 우주 배경에 떠다니는 파티클(애니메이션 시간, 가로 위치만 다름)
const PARTICLES = [
    { duration: 5, left: 55 },
    { duration: 10, left: 90 },
    { duration: 15, left: 60 },
    { duration: 5, left: 75 },
    { duration: 10, left: 82 },
    { duration: 15, left: 35 },
    { duration: 5, left: 48 },
    { duration: 10, left: 65 },
    { duration: 15, left: 87 },
    { duration: 5, left: 95 },
]
