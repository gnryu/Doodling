import React from "react";
import styled from "styled-components";
import Swiper_Features from "./Swiper_Features";

export default function Landing3() {
  return (
    <Background>
      <Wrapper>
        <Title>Features</Title>
        <Description>
          : Our 3 main features: convert, change, own notepad
        </Description>
        <Features>
          <Swiper_Features />
        </Features>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  margin-top: 100px;
  background-color: #fff;
  height: 580px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #2b234a;
`;

const Title = styled.div`
  font-family: "NotoSans-SemiBold";
  font-size: 46px;
`;

const Description = styled.div`
  font-family: "NotoSans-Light";
  font-size: 24px;
  z-index: 10;
`;

const Features = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
`;
