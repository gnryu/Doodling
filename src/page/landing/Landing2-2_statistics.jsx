import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import Image from "../../img/visual_data(2).svg";

export default function Landing22() {
  return (
    <Background>
      <Wrapper>
        <TextWrapper>
          <RowWrapper>
            <TextBold>40%</TextBold>
            <TextNormal>&nbsp; of learners</TextNormal>
          </RowWrapper>
          <TextNormal>
            response better to <br />
            visual than text
          </TextNormal>
          <TextThin>following visual technic galliance</TextThin>
        </TextWrapper>
        <img src={Image} width={400} />
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  padding: 50px 0;
  background-color: #fff;
  height: 580px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  flex-direction: row;
  color: #2b234a;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const TextBold = styled.div`
  font-family: "NotoSans-Bold";
  font-size: 58px;
`;

const TextNormal = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 38px;
`;

const TextThin = styled.div`
  font-family: "NotoSans-Light";
  font-size: 14px;
  margin-top: 10px;
`;
