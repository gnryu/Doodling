import React from "react";
import styled from "styled-components";
import TagWhite from "./TagWhite";
import ImageDelete from "../img/ic_delete.svg";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../api/noteService";
import { useRecoilValue } from "recoil";
import { userState } from "../atom/User";

export default function Note(props) {
  const navigate = useNavigate();

  const date = props.note.date;
  const prev = props.note.preview;
  const tags = props.note.tags;
  const noteID = props.note.noteID;

  // 노트 삭제하기 API
  const user = useRecoilValue(userState);
  function delNote() {
    deleteNote(user.userID, noteID).then((resp) => {
      console.log("Note - " + resp);
    });
  }

  return (
    <Container
      onClick={() => {
        navigate("/note", { state: noteID });
      }}
    >
      <Date>{date}</Date>
      <Text>{prev}</Text>
      <TagContainter>
        {tags.map((tag, idx) => {
          return <TagWhite key={idx} tag={tag} />;
        })}
      </TagContainter>

      <Image
        src={ImageDelete}
        onClick={(e) => {
          e.stopPropagation();
          delNote();
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  width: calc((100% - 16px) / 4);
  height: 200px;
  padding: 20px;

  background: #2b234a;
  border: 2px solid #2b234a;
  border-radius: 20px;
  margin: 2px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  color: #ffffff;
  font-family: "NotoSans-Regular";

  @media screen and (max-width: 930px) {
    width: calc((100% - 16px) / 3);
  }

  @media screen and (max-width: 700px) {
    width: calc((100% - 16px) / 2);
  }
`;

const Text = styled.div`
  height: calc(70%);
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 18px;
  word-break: break-all;
  color: #fff;
`;

const Date = styled.div`
  color: #f1f1f1;
  font-size: 8px;
`;

const TagContainter = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(20%);

  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none; /* 여기 */
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    width: 5%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;

const Image = styled.img`
  width: 16px;
  height: 16px;

  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;

  cursor: pointer;
`;
