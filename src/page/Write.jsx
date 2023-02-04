import React, { useState } from "react";
import styled from "styled-components";
import CustomTags from "../components/CustomTags";
import IcSave from "../img/ic_saveP.svg";
import ImageEditable from "../components/ImageEditable";
import Modal_Image from "../components/Modal_Image";
import Modal_Result from "../components/Modal_Result";

export default function Write() {
  // (1) Date, NoteId 받아오기
  const date = new Date().toISOString().substr(0, 10).replace("T", " ");

  // (2) Drag Text
  const [text, setText] = useState("");
  const onDragged = () => {
    const text = window.getSelection().toString();
    if (text.length <= 0) return;

    setText(text);
  };

  // (3) Save
  var tags = [];
  function getTags(tagList) {
    tags = tagList;
  }
  const save = () => {
    // userId, noteId, date, contents, tags, images(img, text)
    //const tags =
  };

  // Modal(Editable)
  const [showModal, setShowModal] = useState(false);
  const convert = () => {
    if (text.length <= 0) {
      alert("Text must be more than 1 word");
      return;
    }

    setShowModal(true);
  };

  // Modal(Image)
  const [showImg, setShowImg] = useState();

  // Modal -> Show Image Modal
  function showImgModal(text, img) {
    const data = {
      text: text,
      img: img,
    };
    setShowImg(data);
  }

  // Modal -> Close modal
  function closeModal() {
    setShowModal(false);
    setShowImg();
  }

  // Modal -> Add, Delete images
  const [imageList, setImageList] = useState([]);
  function addImage(text, img) {
    const data = {
      text: text,
      img: img,
    };
    const newImageList = [...imageList];
    newImageList.push(data);

    setImageList(newImageList);
  }

  function deleteImage(idx) {
    const newImageList = [...imageList];
    newImageList.pop(idx);

    setImageList(newImageList);
  }

  return (
    <>
      <Wrapper>
        <Top>
          <DateText>{date}</DateText>
          <CustomTags getTags={getTags} />
          <SaveBox onClick={save}>
            save
            <img src={IcSave} style={{ width: "18px", margin: "5px 2px" }} />
          </SaveBox>
        </Top>

        <Body>
          <TextBox>
            <Input
              type="text"
              placeholder="Write note..."
              onMouseUp={() => onDragged()}
            />
            <Text>
              <InputText>{text}</InputText>
              <ButtonP onClick={convert}>CONVERT</ButtonP>
            </Text>
          </TextBox>
          <ImageBox>
            {imageList.map((data, idx) => {
              console.log(data);
              return (
                <ImageEditable
                  key={idx}
                  img={data.img}
                  text={data.text}
                  deleteImage={() => {
                    deleteImage(idx);
                  }}
                  showImgModal={showImgModal}
                />
              );
            })}
          </ImageBox>
        </Body>
      </Wrapper>
      {showModal && (
        <Modal_Result text={text} closeModal={closeModal} addImage={addImage} />
      )}
      {showImg != null && (
        <Modal_Image
          text={showImg.text}
          img={showImg.img}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  height: calc(100vh - 85px);
  margin: 0 auto;
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

const SaveBox = styled.div`
  height: 100%;

  font-family: "NotoSans-Semibold";
  font-size: 14px;

  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
`;

const Body = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
`;

const TextBox = styled.div`
  flex: 8;
  height: 100%;
`;

const ImageBox = styled.div`
  flex: 2;
  margin-left: 20px;
  height: 100%;

  overflow-y: scroll;
  padding-right: 10px;
  margin-bottom: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    height: 10px;
    background-color: #ececec;
    border-radius: 20px;
  }
`;

const Input = styled.textarea`
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
