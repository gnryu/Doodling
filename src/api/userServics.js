import { async } from "@firebase/util";
import axios from "axios";
import API from "../axios";

// 로그인 (POST)
export const login = async (name, email) => {
  const input = {
    userName: name,
    userEmail: email,
  };

  const res = await API.post("/", JSON.stringify(input), {
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": true,
    },
  })
    .then((resp) => {
      console.log(resp);
    })
    .catch((e) => {
      console.log(e);
    });

  return "data";
};

// GET
export const test = async () => {
  API.get("/")
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((e) => {
      console.log(e);
    });

  return "fail";
};
