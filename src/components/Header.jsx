import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { auth } from "../fbase";
import LogoIcon from "../img/Logo_with_desc.svg";
import IcUser from "../img/ic_user.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function signInGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        const name = data.user.displayName;
        const email = data.user.email;

        console.log("name is: " + name + "\nemail is: " + email);
      })
      .catch((err) => {
        console.log(err);
        alert("Google Sign in failed!");
      });
  }

  return (
    <HeaderWrap>
      <Wrapper>
        <img src={LogoIcon} width={134} onClick={() => navigate("/")} />

        <NavWrapper>
          <Text onClick={() => navigate("/")}>Home</Text>
          <Text onClick={() => navigate("/about")}>About</Text>
          <Button onClick={signInGoogle}>Sign in</Button>

          {/* <Text style={{ marginRight: "15px" }}>Gina</Text>
          <UserImage src={IcUser} /> */}
        </NavWrapper>
      </Wrapper>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  position: sticky;
  left: 0px;
  top: 0px;
  padding: 10px 0;
  margin: auto;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
  z-index: 10;

  width: 100%;
  height: 60px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  padding-left: 50px;
  padding-right: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.div`
  height: 100%;
  align-self: center;
  font-family: "NotoSans-Regular";
  font-size: 16px;
  color: #2b234a;
  margin-right: 30px;

  cursor: pointer;
`;

const Button = styled.div`
  height: 100%;
  align-self: center;
  font-family: "NotoSans-Regular";
  font-size: 16px;
  color: #fff;

  background: #2b234a;
  border-radius: 100px;
  padding: 5px 20px;

  cursor: pointer;
`;

const UserImage = styled.img`
  height: 26px;
`;
