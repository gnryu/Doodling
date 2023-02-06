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
export const deleteNote = async (userID, noteID) => {
  console.log(userID, noteID);
  const res = await API.delete("/note/delete", {
    data: JSON.stringify({
      userID: userID,
      noteID: noteID,
    }),
  })
    .then((resp) => {
      console.log(resp);
      return resp;
    })
    .catch((e) => {
      console.log(e);
    });
};

// 태그 검색하기 (GET)
