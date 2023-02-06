import API from "../axios";

// 로그인 (POST)
export const login = async (name, email) => {
  const user = {
    userName: name,
    userEmail: email,
  };

  const resp = await API.post("/user/login", JSON.stringify(user));

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
export const getNote = async (userID, noteID) => {
  const resp = await API.get("/note/detail", {
    params: { userID: userID, noteID: noteID },
  });

  console.log(resp);

  if (resp.data.isSuccess) {
    return resp.data.result;
  }
};
