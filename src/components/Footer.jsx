import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../atom/User";
import Image from "../img/Logo_white.svg";

export default function Footer() {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  // 로그아웃
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Background>
      <Wrapper>
        <MenuWrapper>
          <Menu onClick={() => navigate("/")}>Home</Menu>
          <Menu onClick={() => navigate("/about")}>About</Menu>
          <Menu onClick={() => navigate("/teams")}>Teams</Menu>
          <Menu>Contact</Menu>

          {user != null && (
            <Menu style={{ marginLeft: "5px" }} onClick={logout}>
              | &nbsp;&nbsp;&nbsp;&nbsp;Logout
            </Menu>
          )}
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
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

const Menu = styled.div`
  font-family: "NotoSans-Light";
  font-size: 14px;
  color: white;
  margin: 0 15px;
  text-align: center;

  cursor: pointer;
`;

const Logo = styled.img`
  display: flex;
  align-self: center;
  margin-top: 100px;
`;
