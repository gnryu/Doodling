import API from "../axios";

// 노트 저장하기 (POST)
export const saveNote = async (note) => {
  await API.post("/note/save", JSON.stringify(note), {})
    .then((resp) => {
      console.log(resp);
    })
    .catch((e) => {
      console.log(e);
    });

  return "data";
};

// 노트 삭제하기 (DELETE)

// 태그 검색하기 (GET)
