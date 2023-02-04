import API from "../axios";

// 노트 생성하기 (GET)
export const addNote = async (userId) => {
  await API.post("/", JSON.stringify(input), {})
    .then((resp) => {
      console.log(resp);
    })
    .catch((e) => {
      console.log(e);
    });

  return "data";
};
