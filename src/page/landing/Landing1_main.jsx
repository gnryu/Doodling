import React from "react";
import styled from "styled-components";
import Image from "../../img/MainImage.svg";
import BackgroundImage from "../../img/background.svg";
import { useNavigate } from "react-router-dom";

export default function Landing1() {
  const navigate = useNavigate();

  return (
    <Background style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Wrapper>
        <TextWrapper>
          <TextBold>Transform</TextBold>
          <TextNormal>
            the way you take notes, <br /> the way you learn
          </TextNormal>
          <TextThin>
            created by <u>ChatGPT</u>
          </TextThin>
          <Button onClick={() => navigate("/my")}>Get started</Button>
        </TextWrapper>
        <img src={Image} width={376} />
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  background-size: 100%;
`;

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  color: #2b234a;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const Button = styled.div`
  margin-top: 50px;
  width: fit-content;
  border: 2px solid #2b234a;
  border-radius: 5px;
  font-family: "NotoSans-Bold";
  color: #2b234a;
  padding: 10px 20px;
  cursor: pointer;
  transition: ease-out 0.2s;

  &:hover {
    background-color: #2b234a;
    color: white;
    transition: ease-in 0.2s;
  }
`;
