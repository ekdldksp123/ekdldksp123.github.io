import { useEffect } from "react";
import Planets from "./universe/planets";
import Space from "./universe/space";
import NavBar from "./nav/NavBar";
import SendMail from "./nav/SendMail";
import { useState } from "react";
import { Page, Slide, Wrapper } from "./styles/main.styles";

const Main: React.FC = () => {
  const [visible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const moveRight = (e: Event) => {
      const slide: HTMLElement = document.getElementById("from");
      slide.parentElement.style.transform = `translateX(-100%)`;
      setIsVisible(true);
    };

    const moveLeft = (e: Event) => {
      const slide: HTMLElement = document.getElementById("to");
      slide.parentElement.style.transform = `translateX(0%)`;
      setIsVisible(false);
    };

    let gmail: HTMLElement = document.getElementById("gmail");
    gmail.addEventListener("click", (e: Event) => moveRight(e));
    let arrow: HTMLElement = document.getElementById("back");
    arrow.addEventListener("click", (e: Event) => moveLeft(e));

    return () => {
      gmail.removeEventListener("click", moveRight);
      arrow.removeEventListener("click", moveLeft);
    };
  }, [visible]);

  return (
    <>
      <Wrapper>
        <Slide>
          <Page id="from">
            <NavBar />
            <Space />
          </Page>
          <Page id="to">
            <SendMail isVisible={visible} />
          </Page>
        </Slide>
      </Wrapper>
      <Planets />
    </>
  );
};

export default Main;
