import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div
    className="carousel"
    >
      <Image 
      src="/stock/poster.jpg" 
      alt="carousel1" 
      fill
      priority={true}
      style={{
        objectFit: "cover",
      }}
      onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default Carousel;
