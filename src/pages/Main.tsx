import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getDog, getDogFirst } from "../api/Fetchers";
import { MoonLoader } from "react-spinners";

function Main() {
  const [dogImages, setDogImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getDogImage = async () => {
      try {
        const dogImage = await getDogFirst();
        console.log(dogImage);
        setDogImages(dogImage);
      } catch (error) {
        console.log(error);
      }
    };

    getDogImage();
  }, []);

  const target = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const options = {
    threshold: 0.8,
  };

  const callback = async () => {
    setIsLoading(true);
    const dogImage = await getDog();
    setTimeout(() => {
      setDogImages((prevData) => [...prevData, ...dogImage]);
      setIsLoading(false);
    }, 300);
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
        {isLoading && <MoonLoader color="#d68336" speedMultiplier={0.5} />}
        <div ref={target} />
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
