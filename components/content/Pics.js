import React from 'react'
import Image from 'next/image'

const Pics = () => {
  //get an array of 100 images of random cats
  const images = Array.from({ length: 20 }, () => `https://cataas.com/cat?${Math.random()}`)
  return (
    <section className='picsGallery'>
      {images.map((image, index) => (
        <div key={index} className='picHolder'>
          <Image src={image} 
          alt={`pic-${index+1}`} 
          fill
          style={{
            objectFit: "cover",
          }}
          onDragStart={(e) => e.preventDefault()}
          />
        </div>
      ))}
    </section>
  )
}

export default Pics