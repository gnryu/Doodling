import React from "react";
import styled from "styled-components";
import ImageExample from "../img/img_dog.svg";

export default function Image() {
  return (
    <ImageBox>
      <Img src={ImageExample} />
    </ImageBox>
  );
}

const ImageBox = styled.div`
  width: 180px;
  height: 180px;
  padding: 0;

  border: 2px solid #2b234a;
  border-radius: 15px;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
// TODO: swiper로 변경
