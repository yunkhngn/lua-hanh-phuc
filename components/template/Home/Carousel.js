import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div
    className="carousel"
    >
      <Image 
      src="/anh.jpg" 
      alt="carousel1" 
      fill
      style={{
        objectFit: "cover",
      }}
      onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default Carousel;
