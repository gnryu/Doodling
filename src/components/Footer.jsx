import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Image from "../img/Logo_white.svg";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Background>
      <Wrapper>
        <MenuWrapper>
          <Menu onClick={() => navigate("/")}>Home</Menu>
          <Menu onClick={() => navigate("/about")}>About</Menu>
          <Menu onClick={() => navigate("/teams")}>Teams</Menu>
          <Menu>Contact</Menu>
        </MenuWrapper>

        <Logo src={Image} width={100} />
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  padding: 20px;
  background-color: #2b234a;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;

const Menu = styled.div`
  font-family: "NotoSans-Light";
  font-size: 14px;
  color: white;

  cursor: pointer;
`;

const Logo = styled.img`
  display: flex;
  align-self: center;
  margin-top: 100px;
`;
