import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100wh;
  overflow: hidden;
`;

export const Slide = styled.div`
  height: 100% !important;
  display: flex;
  flex-wrap: nowrap;
  transition: all 0.5s linear;
  transform: translateX(0);
`;

export const Page = styled.div`
  flex: 0 0 auto;
  height: 100% !important;
  width: 100%;
  transition: 1s;
  left: 0%;
  opacity: 1;
  position: relative;
`;
