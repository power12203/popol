import React, { useRef, useState } from "react";
import Item from "../components/postList/Item";
import Header from "../common/Header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AirbnbPage() {
  const [items, setItems] = useState();

  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const API_KEY = "07d4ed62d1mshefab5b224a1aea4p1ada03jsn191c1f72699b";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
    },
  };

  const fetchAirbnb = async (e) => {
    e.preventDefault();
    console.log("city", ref.current.value);
    console.log("checkin", ref2.current.value);
    console.log("checkout", ref3.current.value);
    // console.log("totalRecords", ref2.current.value);
    // console.log("currency", ref3.current.value);
    // console.log("adults", ref4.current.value);

    const city = ref.current.value;
    const checkin = ref2.current.value;
    const checkout = ref3.current.value;
    // const totalRecords = ref2.current.value;
    // const currency = ref3.current.value;
    // const adults = ref4.current.value;

    const url = `https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByLocationV2?location=${city}&checkin=${checkin}&checkout=${checkout}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Fail to fetch airbnb data");
      }
      const result = await response.json();
      console.log(result.data.list);
      setItems(result.data.list);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Header />
      <form onSubmit={fetchAirbnb}>
        <input type="text" placeholder="영어로 도시 입력" ref={ref} />
        <p>
          checkin
          <input type="date" ref={ref2} />
          checkout
          <input type="date" ref={ref3} />
        </p>
        <button>검색</button>
      </form>

      {items && items.map((item) => <Item item={item} />)}
    </>
  );
}

export default AirbnbPage;
