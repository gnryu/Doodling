import API from "../axios";

// 로그인
export const login = async (code) => {
  const { data } = await API.post("url", JSON.stringify(code));

  return data;
};
