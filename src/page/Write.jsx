import React, { useState } from "react";
import styled from "styled-components";
import Image from "../components/Image";
import TagPrimary from "../components/TagPrimary";

export default function Write() {
  const [text, setText] = useState("");
  const onDragged = (e) => {
    const text = window.getSelection().toString();

    console.log(e);
    console.log(text);
    setText(text);
  };

  return (
    <Wrapper>
      <Top>
        <Date>2023/02/02</Date>
        <Tags>
          <TagPrimary />
          <TagPrimary />
          <TagPrimary />
        </Tags>
      </Top>

      <Body>
        <TextBox>
          <Input type="text" onMouseUp={(e) => onDragged(e)} />
          <Text>
            <InputText>{text}</InputText>
            <ButtonP>CONVERT</ButtonP>
          </Text>
        </TextBox>
        <ImageBox>
          <Image />
          <Image />
          <Image />
          <Image />
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
`;

const Top = styled.div`
  width: 100%;
  height: 5%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Date = styled.div`
  font-family: "NotoSans-Semibold";
  font-size: 14px;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`;

const Body = styled.div`
  width: 100%;
  height: 85%;
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
  margin-left: 10px;
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
