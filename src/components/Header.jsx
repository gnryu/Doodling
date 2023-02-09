import React, { useEffect } from "react";
import styled from "styled-components";
import LogoIcon from "../img/Logo_with_desc.svg";
import IcUser from "../img/ic_user.svg";
import { useNavigate } from "react-router-dom";
import { googleLogin, login } from "../api/userServics";
import { useRecoilState } from "recoil";
import { userState } from "../atom/User";

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  // 로그인 상태 유지
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== undefined) {
      setUser(JSON.parse(user));
      console.log("자동 로그인 - " + user);
    }
  }, []);

  // 구글 로그인 API -> 로그인 API
  function signInG() {
    googleLogin().then((data) => {
      const req = {
        userName: data.user.displayName,
        userEmail: data.user.email,
      };

      login(req).then((user) => {
        const userJson = JSON.stringify(user);
        localStorage.setItem("user", userJson);
        setUser(user);
      });
    });
  }

  return (
    <HeaderWrap>
      <Wrapper>
        <img
          src={LogoIcon}
          width={134}
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (user == null) return;
            navigate("/my");
          }}
        />

        <NavWrapper>
          {user == null && (
            <>
              <Button onClick={signInG}>Sign in</Button>
            </>
          )}

          {user != null && (
            <>
              <Text
                style={{ marginRight: "15px" }}
                onClick={() => navigate("/my")}
              >
                {user.userName}
              </Text>
              <UserImage src={IcUser} onClick={() => navigate("/my")} />
            </>
          )}
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
  z-index: 30;

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
  cursor: pointer;
`;
