import React, { useState, useEffect } from "react";
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import "./Hero.css";
import image25 from "../Assets/image25.jpg";
import image17 from "../Assets/image17.jpg";
import image32 from "../Assets/image32.jpg";
import image37 from "../Assets/image37.jpg";
import image40 from "../Assets/image40.jpg";

const Hero = () => {
  const images = [
    {
      src: image25,
      alt: "First slide",
    },
    {
      src: image17,
      alt: "Second slide",
    },
    {
      src: image32,
      alt: "Third slide",
    },
    {
      src: image37,
      alt: "Fourth slide",
    },
    {
      src: image40,
      alt: "Fifth slide",
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
      // Add any additional logic or operations here
    }
  }, []);

  return (
    <Carousel id="carousel-1" activeIndex={index} onSelect={handleSelect}>
      {images.map((image, idx) => (
        <CarouselItem key={idx} active={idx === index}>
          <div className="hero-image-overlay">
            <img className="d-block w-100" src={image.src} alt={image.alt} />
            <div className="hero-image-overlay-content">
              <h1>ENJOYMENT, LEARNING, AND SPORTS TRAINING FOR A LIFETIME!</h1>
              <p>
                Our club offers to each of our children and their families,
                enjoyable sporting experiences, full of learning, that
                contribute to their integral formation.
              </p>
              <button type="button" className="btn btn-light">
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
