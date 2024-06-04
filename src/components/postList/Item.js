import React from "react";

function Item({ item }) {
  return (
    <div>
      <div className="card">
        <img
          src={item.listing.contextualPictures[0].picture} //이미지 정보
          className="card-img-top"
          style={{ width: "200px", maxHeight: "200px" }} //스타일 지정(이미지가 크면 안나올 수도 있음)
        />
        <div className="card-body">
          <h5 className="card-title">{item.listing.city}</h5> // 도시 이름
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Item;
