import React from "react";
import img1 from "../../../assets/images/banner/1.png";
import img2 from "../../../assets/images/banner/2.png";
import img3 from "../../../assets/images/banner/3.png";
import img4 from "../../../assets/images/banner/4.png";
import "./Banner.css";
import CarouselItem from "./CarouselItem";

const carouselData = [
  {
    image: img1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full py-5">
      {carouselData.map((carousel) => (
        <CarouselItem key={carousel.id} carousel={carousel}></CarouselItem>
      ))}
    </div>
  );
};

export default Banner;
