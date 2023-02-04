import React from "react";
import styled from "styled-components";
import Swiper_Features from "./Swiper_Features";

export default function Landing3() {
  return (
    <Wrapper>
      <Title>Features</Title>
      <Description>
        : Our 3 main features: convert, change, own notepad
      </Description>
      <Features>
        <Swiper_Features />
      </Features>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  color: #2b234a;
`;

const Title = styled.div`
  font-family: "NotoSans-SemiBold";
  font-size: 46px;
`;

const Description = styled.div`
  font-family: "NotoSans-Light";
  font-size: 24px;
`;

const Features = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
`;
