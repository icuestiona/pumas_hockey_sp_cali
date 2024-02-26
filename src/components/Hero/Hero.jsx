import React, { useState, useEffect } from "react";
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import "./Hero.css";
import image26 from "../Assets/image26.jpg";
import image17 from "../Assets/image17.jpg";
import image34 from "../Assets/image34.jpg";
import image10 from "../Assets/image10.jpg";
import image37 from "../Assets/image37.jpg";
import image40 from "../Assets/image40.jpg";
import image8 from "../Assets/image8.jpg";

const Hero = () => {
  const images = [
    {
      src: image40,
      alt: "Fifth slide",
    },
    {
      src: image26,
      alt: "First slide",
    },
    {
      src: image17,
      alt: "Second slide",
    },
    {
      src: image34,
      alt: "Third slide",
    },
    {
      src: image10,
      alt: "Tenth slide",
    },
    {
      src: image37,
      alt: "Fourth slide",
    },
    {
      src: image8,
      alt: "Sixth slide",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // Manually initialize the carousel
    const carouselElement = document.querySelector("#carousel-1");
    if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement);
    }
  }, []);

  return (
    <Carousel id="carousel-1" activeIndex={index} onSelect={handleSelect}>
      {images.map((image, idx) => (
        <CarouselItem key={idx} active={idx === index}>
          <div className="hero-image-overlay">
            <img className="d-block w-100" src={image.src} alt={image.alt} />
            <div className="hero-image-overlay-content">
              <h1>
                Enjoyment, learning and <br />
                lifelong sports training!
              </h1>
              <p>
                Offering children, youth and their families amusing sports
                experiences and learnings that contribute to their integral
                development.
              </p>
              <button type="button" className="btn btn-info">
                Ask for a free class
              </button>
            </div>
          </div>
          <CarouselCaption />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Hero;
