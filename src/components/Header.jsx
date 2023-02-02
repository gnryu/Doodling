import React from "react";
import styled from "styled-components";
import LogoIcon from "../img/Logo_with_desc.svg";

export default function Header() {
  return (
    <HeaderWrap>
      <Wrapper>
        <img src={LogoIcon} width={134} />
        <Text>Sign in</Text>
      </Wrapper>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  position: sticky;
  left: 0px;
  top: 0px;
  padding: 10px 0;
  margin: 0;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
  z-index: 10;
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  padding-left: 50px;
  padding-right: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.div`
  height: 100%;
  align-self: center;
  font-family: "NotoSans-Regular";
  font-size: 16px;
  color: #2b234a;
`;
