import React, { useState } from "react";
import Item from "../components/postList/Item";
import Header from "../common/Header";
import { TbZoom } from "react-icons/tb";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import CustomCalendar from "../components/auth/CustomCalendar"; // 경로를 적절하게 수정하세요
import data from "../data/cate-data.json"; // 데이터 파일 import

const Searchbarform = styled.form`
  top: 30px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin: auto;
  border-radius: 32px;
  height: 66px;
  width: 820px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
`;
const AccommodationList = styled.div`
  margin-top: 50px;
  display: block;
`;
const CityInput = styled.input`
  margin-right: 2px;
  border-radius: 32px;
  border: none;
  text-align: center;
  flex: 1;
`;
const SearchButton = styled.button`
  padding: 16px;
  position: relative;
  margin: auto;
  color: white;
  width: 50px;
  cursor: pointer;
  display: inline-block;
  background-color: #ff007f;
  border-radius: 50%;
  margin-left: 10px;
  border: none;
`;
const DateSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const PersonInput = styled.input`
  margin-right: 2px;
  border-radius: 32px;
  border: none;
  text-align: center;
  width: 80px;
`;
const Label = styled.span`
  margin-left: 5px;
  margin: auto;
`;

function NewPage() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [roomGuests, setRoomGuests] = useState(1);
  const [cityName, setCityName] = useState(""); // 도시명 상태 추가
  const [filteredItems, setFilteredItems] = useState([]); // 필터링된 아이템 상태 추가
  const [searchClicked, setSearchClicked] = useState(false); // 검색 버튼 클릭 여부 상태 추가

  const handleSubmit = (e) => {
    e.preventDefault();
    // 입력된 도시명으로 아이템 필터링
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(cityName.toLowerCase())
    );
    setFilteredItems(filtered);
    setSearchClicked(true);
  };

  const handleCalendarChange = (date, type) => {
    if (type === "checkin") {
      setCheckInDate(date);
    } else if (type === "checkout") {
      setCheckOutDate(date);
    }
    setSearchClicked(null); // 날짜가 변경될 때는 검색 클릭 상태를 초기화
  };

  return (
    <>
      <Header />
      <div>
        <Searchbarform onSubmit={handleSubmit}>
          <CityInput
            type="text"
            placeholder="영어로 도시 입력"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <DateSection>
            <CustomCalendar
              onChange={(date) => handleCalendarChange(date, "checkin")}
              value={checkInDate}
              placeholder="체크인"
            />
            <CustomCalendar
              onChange={(date) => handleCalendarChange(date, "checkout")}
              value={checkOutDate}
              placeholder="체크아웃"
            />
          </DateSection>
          <span style={{ margin: "auto" }}>객실인원</span>
          <PersonInput
            type="number"
            min="1"
            value={roomGuests}
            onChange={(e) => setRoomGuests(e.target.value)}
          />
          <Label>명</Label>
          <SearchButton type="submit">
            <TbZoom />
          </SearchButton>
        </Searchbarform>
      </div>
      <AccommodationList>
        {/* 검색 버튼을 클릭한 경우에만 필터링된 아이템을 뿌려줍니다 */}
        {searchClicked &&
          filteredItems.map((item, index) => <Item key={index} item={item} />)}
      </AccommodationList>
    </>
  );
}

export default NewPage;
