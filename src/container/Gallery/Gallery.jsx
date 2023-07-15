import React, { useRef } from "react";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const image = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam, recusandae voluptatum nemo quibusdam eligendi, nihil qui iusto doloribus, ab quia distinctio!
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {image.map((img, index) => (
            <div className="app__gallery-images_card flex__center" key={index}>
              <img src={img} alt={`Gallery Images - ${index + 1}`} />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll("left")} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
