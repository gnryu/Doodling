import API from "../axios";

// 노트 저장하기 (POST)
export const saveNote = async (date, tags, content, images) => {
  const note = {
    userId: 12312,
    date: date,
    tags: tags,
    content: content,
    images: images,
  };

  await API.post("/", JSON.stringify(note), {})
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
