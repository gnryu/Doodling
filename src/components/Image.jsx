import React from "react";
import styled from "styled-components";
import ImageExample from "../img/img_dog.svg";

export default function Image() {
  return <ImageBox src={ImageExample} />;
}

const ImageBox = styled.img`
  width: 100%;
  height: 180px;
  padding: 0;

  border: 2px solid #2b234a;
  border-radius: 15px;
  box-sizing: border-box;

  margin-bottom: 5px;
`;
// TODO: 이미지 사이즈 조정, swiper로  변경
