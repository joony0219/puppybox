import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getDog from "../api/Fetchers";

function Main() {
  const [dogImages, setDogImages] = useState<string[]>([]);

  useEffect(() => {
    const getDogImage = async () => {
      try {
        const dogImage = await getDog();
        console.log(dogImage);
        setDogImages(dogImage);
      } catch (error) {
        console.log(error);
      }
    };

    getDogImage();
  }, []);

  const handleButton = async () => {
    const dogImage = await getDog();
    setDogImages((prevData) => [...prevData, ...dogImage]);
    console.log(dogImages);
  };

  return (
    <div>
      <Container>
        <h1>Puppy Box</h1>
        <ImageContainer>
          {dogImages.map((dog, index) => (
            <ImageBox key={index} src={dog} alt="사진" />
          ))}
        </ImageContainer>
        <StyledButton onClick={handleButton}>더 보기</StyledButton>
      </Container>
    </div>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 800px;
  margin: 10px auto;

  padding: 6px 12px;
  border-radius: 8px;
  line-height: 1.5;
  border: 1px solid lightgray;
`;

const StyledButton = styled.button`
  width: 120px;
  padding: 6px 12px;
  margin: 6px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  background: white;
  cursor: pointer;
  &:hover {
    background-color: skyblue;
    color: blue;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  width: 100%;
`;

const ImageBox = styled.img`
  width: 250px;
  height: 250px;

  border-radius: 10px;
`;
