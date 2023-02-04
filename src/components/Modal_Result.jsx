import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageRetry from "../img/ic_retry.svg";
import ImageSave from "../img/ic_save.svg";
import ImageExample from "../img/img_dog.svg";
import ImageRemove from "../img/ic_close_primary.svg";
import { convertImg } from "../api/imageService";

export default function Modal_Result(props) {
  //console.log(props.img);
  const [img, setImg] = useState();

  useEffect(() => {
    const res = convertImg(props.text);
    setImg(res);
  }, []);

  function closeModal() {
    props.closeModal();
  }

  function retry() {}

  function save() {}

  return (
    <Background onClick={closeModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ImageWrapper>
          <Img src={img} />
        </ImageWrapper>
        <Text>Dog is running</Text>
        <ButtonWrapper>
          <Button src={ImageRetry} onClick={retry} />
          <Button src={ImageSave} onClick={save} />
        </ButtonWrapper>

        <CloseButton src={ImageRemove} onClick={closeModal} />
      </Modal>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);

  position: absolute;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 70%;
  height: 70%;
  background-color: #fff;
  border-radius: 20px;
  z-index: 20;

  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: relative;
`;

const ImageWrapper = styled.div`
  width: 80%;
  height: 60%;

  border: 2px solid #2b234a;
  border-radius: 10px;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const Text = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 22px;
  color: #2b234a;
`;

const ButtonWrapper = styled.div``;

const Button = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 30px;
  cursor: pointer;
`;

const CloseButton = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
`;
