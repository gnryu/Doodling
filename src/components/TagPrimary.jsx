import React from "react";
import styled from "styled-components";

export default function TagPrimary() {
  return <Containter>#dog</Containter>;
}

const Containter = styled.div`
  background: #2b234a;
  color: white;
  border-radius: 50px;

  min-width: 60px;
  height: 100%;
  padding: 0 5px;

  text-align: center;
  font-family: "NotoSans-Regular";
  font-size: 14px;
  line-height: 2;

  margin-right: 5px;

  &::selection {
    background-color: none;
  }
`;
