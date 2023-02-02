import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import NewNote from "../components/NewNote";
import Note from "../components/Note";
import ImageSearch from "../img/ic_search.svg";

export default function Main() {
  return (
    <Wrapper>
      <SearchWrapper>
        <Search type="text" placeholder="Search tags..." />
        <SearchImage src={ImageSearch} />
      </SearchWrapper>
      <MemoWrapper>
        <NewNote />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </MemoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  height: fit-content;
  margin: 0 auto;
  padding: 0 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchWrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f1f1f1;
  border-radius: 30px;
  border: none;

  margin-top: 40px;
  position: relative;
`;

const Search = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  background: none;
  border: none;

  font-family: "NotoSans-Regular";
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

const SearchImage = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 0;
  margin-right: 10px;
`;

const MemoWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 30px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
