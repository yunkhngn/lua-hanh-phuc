import React from 'react'
import Image from 'next/image'

const ImageFull = ({img,text}) => {
  return (
    <div className="imageFull">
        <Image
            src={img}
            alt={text}
            fill
            priority={true}
            style={{
                objectFit: "cover",
            }}
            onDragStart={(e) => e.preventDefault()}
        />
    </div>
  )
}

export default ImageFull