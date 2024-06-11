import React from "react";
import styled from "styled-components";
import tnrth from "../../cityImage/62c9fe6b0c60bb410d6e4ac35d49d37d.webp";
import tnrth2 from "../../cityImage/City-guides_Osaka_7-best-budget-hotels_Sotetsu-Fresa-Inn-Osaka-Yodoyabashi1.jpg";
import tnrth3 from "../../cityImage/e7d0a7480de494b6b40eb4098197fb50.webp";

const DlatlDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-top: 20px;
  .card {
    border: none;
  }
`;
const Img = styled.img`
  height: 180px;
  width: 450px;
  border-radius: 10px;
`;

function Item({ item }) {
  return (
    <DlatlDiv>
      <div class="card">
        <Img src={tnrth} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">
            APA 호텔 앤 리조트 오사카 우메다 에키 타워 (APA Hotel & Resort Osaka
            Umeda Eki Tower)
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <Img src={tnrth2} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">소테츠 프레사 인 오사카-요도야바시</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <Img src={tnrth3} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Hotel Forza Osaka Kitahama</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <Img src={tnrth3} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <Img src={tnrth} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">
            APA 호텔 앤 리조트 오사카 우메다 에키 타워 (APA Hotel & Resort Osaka
            Umeda Eki Tower)
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <Img src={tnrth2} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">소테츠 프레사 인 오사카-요도야바시</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <Img src={tnrth2} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">소테츠 프레사 인 오사카-요도야바시</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <Img src={tnrth} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">
            APA 호텔 앤 리조트 오사카 우메다 에키 타워 (APA Hotel & Resort Osaka
            Umeda Eki Tower)
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </DlatlDiv>
  );
}

export default Item;
