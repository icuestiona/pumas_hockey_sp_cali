import React, { useState, useEffect } from "react";
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import "./Hero.css";
import image26 from "../Assets/image26.jpg";
import image19 from "../Assets/image19.jpg";
import image34 from "../Assets/image34.jpg";
import image10 from "../Assets/image10.jpg";
import image37 from "../Assets/image37.jpg";
import image41 from "../Assets/image41.jpg";
import image38 from "../Assets/image38.jpg";

const Hero = () => {
  const images = [
    {
      src: image41,
      alt: "Fifth slide",
    },
    {
      src: image26,
      alt: "First slide",
    },
    {
      src: image19,
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
      src: image38,
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
    <Carousel
      id="carousel-1"
      activeIndex={index}
      onSelect={handleSelect}
      className="d-none d-md-block"
    >
      {images.map((image, idx) => (
        <CarouselItem key={idx} className="carousel-grid-item">
          <div className="hero-image-overlay">
            <img
              className="d-block w-100 img-fluid"
              src={image.src}
              alt={image.alt}
            />
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
