import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { getNote } from "../api/userServics";
import { userState } from "../atom/User";
import CustomTags from "../components/CustomTags";
import Image from "../components/Image";
import Modal_Image from "../components/Modal_Image";
import Tags from "../components/Tags";
import IcRemove from "../img/ic_remove (1).svg";

export default function Note() {
  // 전달받은 NoteID
  const { state } = useLocation();
  const user = useRecoilValue(userState);
  //console.log(state + " " + user.userID);

  // 노트 상세 조회 API
  const [note, setNote] = useState();
  useEffect(() => {
    getNote(user.userID, state).then((noteO) => {
      const noteJS = JSON.stringify(noteO);
      const result = JSON.parse(noteJS);
      console.log(result.detail);

      setNote(result.detail);
    });
  }, [user]);

  // Modal
  const [showModal, setShowModal] = useState(false);

  // 노트 삭제 API
  function deleteNote() {}

  return (
    <>
      <Wrapper>
        {note != null && (
          <>
            <Top>
              <DateText>{note.date}</DateText>
              <Tags tags={note.tags} />
              <DeleteImg src={IcRemove} onClick={deleteNote} />
            </Top>

            <Body>
              <TextBox>
                <Input> {note.content}</Input>
              </TextBox>
              <ImageBox>
                {note.images.map((item, idx) => {
                  return <Image item={item} key={idx} />;
                })}
              </ImageBox>
            </Body>
          </>
        )}
      </Wrapper>
      {showModal && <Modal_Image closeModal={() => setShowModal(false)} />}
    </>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  height: calc(100vh - 100px);
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 0 50px;

  overflow-y: hidden;
`;

const Top = styled.div`
  width: 100%;
  height: 5%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const DateText = styled.div`
  font-family: "NotoSans-Semibold";
  font-size: 14px;
`;

const DeleteImg = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  width: 24px;
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 10px;

  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    height: 100%;
  }
`;

const TextBox = styled.div`
  flex: 8;
  height: 100%;

  @media screen and (max-width: 1030px) {
    flex: 5;
  }
`;

const ImageBox = styled.div`
  flex: 2;
  margin-left: 20px;
  height: 100%;

  overflow-y: scroll;
  padding-right: 10px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    height: 10px;
    background-color: #ececec;
    border-radius: 20px;
  }

  @media screen and (max-width: 1030px) {
    width: 100%;
    margin: 0;
    margin: 10px 0 0 0;
    flex: 5;

    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

const Input = styled.div`
  width: 100%;
  height: 85%;

  border: 2px dashed #2b234a;
  border-radius: 10px;
  box-sizing: border-box;

  margin-bottom: 10px;
  padding: 20px;

  font-family: "NotoSans-Regular";
  font-size: 14px;
  color: #2b234a;
  resize: none;

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::placeholder {
    color: lightgray;
  }
`;

const Text = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  padding: 0 20px;
  box-sizing: border-box;

  border: 2px solid #2b234a;
  border-radius: 10px;

  display: flex;
  align-items: center;
`;

const InputText = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 18px;
  color: #2b234a;
`;

const ButtonP = styled.div`
  width: 100px;
  height: 100%;

  background: #2b234a;
  border: 2px solid #2b234a;
  box-sizing: border-box;
  border-radius: 0px 5px 5px 0px;

  font-family: "NotoSans-Bold";
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  position: absolute;
  right: 0;

  cursor: pointer;
`;
