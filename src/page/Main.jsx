import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { searchTag } from "../api/noteService";
import { getNotes } from "../api/userServics";
import { userState } from "../atom/User";
import Header from "../components/Header";
import NewNote from "../components/NewNote";
import Note from "../components/Note";
import ImageSearch from "../img/ic_search.svg";
import ImageCancel from "../img/ic_cancelG.svg";

export default function Main() {
  const navigate = useNavigate();

  const [noteList, setNoteList] = useState([]);
  const user = useRecoilValue(userState);

  // 검색 상태 (input <-> div)
  const [isSearching, setIsSearching] = useState(false);

  // 노트 전체 조회하기 API
  useEffect(() => {
    if (user == null || isSearching == true) return;
    getNotes(user.userID).then((notesO) => {
      const notesJS = JSON.stringify(notesO);
      const notes = JSON.parse(notesJS);

      setNoteList(notes);
    });
  }, [user, isSearching]);

  // 노트 검색하기 API
  const searchBar = useRef();
  function search() {
    const searchWord = searchBar.current.value;
    searchTag(user.userID, searchWord).then((notesO) => {
      if (notesO === undefined) return;

      const notesJS = JSON.stringify(notesO);
      const notes = JSON.parse(notesJS);

      setNoteList(notes);
      setIsSearching(true);
    });
  }

  return (
    <Wrapper>
      <SearchWrapper>
        {!isSearching && (
          <>
            <Search
              type="text"
              placeholder="Search tags..."
              ref={searchBar}
              onKeyDown={(e) => {
                if (e.keyCode == 13) search();
              }}
            />
            <SearchImage src={ImageSearch} onClick={search} />
          </>
        )}

        {isSearching && (
          <>
            <SearchResult onClick={() => setIsSearching(false)}>
              animal
            </SearchResult>
            <SearchImage
              src={ImageCancel}
              style={{ width: "14px", marginRight: "15px" }}
              onClick={() => setIsSearching(false)}
            />
          </>
        )}
      </SearchWrapper>
      <MemoWrapper>
        <NewNote />
        {noteList.map((note, index) => {
          return <Note key={index} note={note} />;
        })}
      </MemoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  min-height: 400px;
  margin: 0 auto;
  margin-bottom: 100px;
  padding: 0 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
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

const SearchResult = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  background: none;
  border: none;

  font-family: "NotoSans-Regular";
  font-size: 18px;
  line-height: 2;
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
  cursor: pointer;
`;

const MemoWrapper = styled.div`
  width: 100%;
  margin-top: 30px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
