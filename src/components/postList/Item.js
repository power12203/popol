import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import tnrth from "../../cityImage/62c9fe6b0c60bb410d6e4ac35d49d37d.webp";
// import tnrth2 from "../../cityImage/City-guides_Osaka_7-best-budget-hotels_Sotetsu-Fresa-Inn-Osaka-Yodoyabashi1.jpg";
// import tnrth3 from "../../cityImage/e7d0a7480de494b6b40eb4098197fb50.webp";

const Img = styled.img`
  height: 250px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  margin-left: -0px;
`;

const CardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  .card {
    border: none;
  }
  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 300px;
  }
  .slick-dots {
    position: absolute;
    bottom: 40px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "•";
    text-align: center;
    opacity: 0.5;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Card = styled.div`
  width: 19rem;
  height: auto;
  margin-left: 20px;
`;

function Item({ items }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const Cardbody = styled.div`
    height: 200px;
    p {
      font-size: 15px;
      height: 1px;
    }
  `;
  return (
    <CardDiv>
      {items.data.list.map((item, index) => (
        <Card className="card" key={index}>
          <Slider {...settings}>
            {item.listing.contextualPictures.map((picture, picIndex) => (
              <div key={picIndex}>
                <Img
                  src={picture.picture}
                  alt={
                    picture.caption
                      ? picture.caption.messages.join(", ")
                      : "Image"
                  }
                />
                {picture.caption && (
                  <div>
                    {picture.caption.messages.map((message, msgIndex) => (
                      <p key={msgIndex}>{message}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Slider>
          <Cardbody className="card-body">
            <h5 className="card-title">{item.listing.name}</h5>
            <p className="card-text">City: {item.listing.city}</p>
            <p className="card-text">
              Average Rating: {item.listing.avgRatingLocalized}
            </p>
            <p className="card-text">
              Total:{" "}
              {item.pricingQuote.structuredStayDisplayPrice.primaryLine.price}
            </p>
            <div>
              {item.pricingQuote.structuredStayDisplayPrice.explanationData.priceDetails[0].items.map(
                (detail, detailIndex) => (
                  <p key={detailIndex} className="card-text">
                    {detail.description}: {detail.priceString}
                  </p>
                )
              )}
            </div>
          </Cardbody>
        </Card>
      ))}
    </CardDiv>
  );
}

export default Item;
