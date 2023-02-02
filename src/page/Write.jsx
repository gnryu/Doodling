import React, { useState } from "react";
import styled from "styled-components";
import CustomTags from "../components/CustomTags";
import Image from "../components/Image";
import Swiper_image from "../components/Swiper_image";

export default function Write() {
  const [text, setText] = useState("");
  const onDragged = () => {
    const text = window.getSelection().toString();
    if (text.length <= 0) return;

    setText(text);
  };

  // Date
  const date = new Date().toISOString().substr(0, 10).replace("T", " ");

  return (
    <Wrapper>
      <Top>
        <DateText>{date}</DateText>
        <CustomTags />
      </Top>

      <Body>
        <TextBox>
          <Input
            type="text"
            placeholder="Write note..."
            onMouseUp={() => onDragged()}
          />
          <Text>
            <InputText>{text}</InputText>
            <ButtonP>CONVERT</ButtonP>
          </Text>
        </TextBox>
        <ImageBox>
          <Swiper_image />
        </ImageBox>
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  height: calc(100vh - 85px);
  margin: 0 auto;
  padding: 0 50px;

  overflow-y: hidden;
`;

const Top = styled.div`
  width: 100%;
  height: 5%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DateText = styled.div`
  font-family: "NotoSans-Semibold";
  font-size: 14px;
`;

const Body = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
`;

const TextBox = styled.div`
  flex: 8;
  height: 100%;
`;

const ImageBox = styled.div`
  flex: 2;
  margin-left: 20px;
  height: 100%;
`;

const Input = styled.textarea`
  width: 100%;
  height: 85%;

  border: 2px dashed #2b234a;
  border-radius: 10px;
  box-sizing: border-box;

  margin-bottom: 10px;
  padding: 20px;

  font-family: "NotoSans-Regular";
  font-size: 14px;
  color: #2b234a;
  resize: none;

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::placeholder {
    color: lightgray;
  }
`;

const Text = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  padding: 0 20px;
  box-sizing: border-box;

  border: 2px solid #2b234a;
  border-radius: 10px;

  display: flex;
  align-items: center;
`;

const InputText = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 18px;
  color: #2b234a;
`;

const ButtonP = styled.div`
  width: 100px;
  height: 100%;

  background: #2b234a;
  border: 2px solid #2b234a;
  box-sizing: border-box;
  border-radius: 0px 5px 5px 0px;

  font-family: "NotoSans-Bold";
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  position: absolute;
  right: 0;

  cursor: pointer;
`;
