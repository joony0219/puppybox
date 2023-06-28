import React, { useEffect, useState } from "react";
import getDog from "../api/Fetchers";

function Main() {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const getDogImage = async () => {
      try {
        const dogImage = await getDog();
        console.log(dogImage);
        setDogImages([dogImage]);
      } catch (error) {
        console.log(error);
      }
    };

    getDogImage();
  }, []);

  return (
    <div>
      <h1>Puppy Box</h1>
      <div>image</div>
      <img src={dogImages && dogImages[0]} alt="사진" />
    </div>
  );
}

export default Main;
