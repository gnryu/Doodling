import { async } from "@firebase/util";
import { useSetRecoilState } from "recoil";
import { userState } from "../atom/User";
import API from "../axios";

// 로그인 (POST)
export const login = async (name, email) => {
  const input = {
    userName: name,
    userEmail: email,
  };

  const resp = await API.post("/user/login", JSON.stringify(input));
  console.log(resp);

  if (resp.data.isSuccess) {
    const user = {
      userName: resp.data.result.userName,
      userID: resp.data.result.userID,
    };

    return user;
  }
};

// 노트 조회하기 (GET)
export const getNotes = async (userID) => {
  const resp = await API.get("/mynote", {
    params: { userID: userID },
  });

  console.log(resp);

  if (resp.data.isSuccess) {
    return resp.data.result;
  }
};

// 노트 상세 조회하기 (GET)
