import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import Image from "../../img/visual_data.svg";

export default function Landing2() {
  return (
    <Background>
      <Wrapper>
        <img src={Image} width={376} />
        <TextWrapper>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <TextBold>15-20%</TextBold>
          </AnimationOnScroll>
          <TextNormal>
            people have some of <br />
            the symptoms of dyslexia
          </TextNormal>
          <TextThin>following dyslexia center</TextThin>
        </TextWrapper>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  margin-top: 100px;
  padding: 100px 0;
  background-color: #efefef;
  height: 580px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  color: #2b234a;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const TextBold = styled.div`
  font-family: "NotoSans-Bold";
  font-size: 58px;
`;

const TextNormal = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 38px;
  margin-top: 5px;
`;

const TextThin = styled.div`
  font-family: "NotoSans-Light";
  font-size: 14px;
  margin-top: 10px;
`;
