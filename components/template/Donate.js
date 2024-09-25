import React from 'react'
import Image from 'next/image'
import {Div, Text} from 'atomize'

const Donate = () =>{
  return (
  <Div
    w="100%"
    justify="center"
    align="center"
    d="flex"
    flexDir="column"
    >
    <Text
      textSize="display2"
      textWeight="bold"
      m={{t:"1em"}}
      >Ủng hộ dự án</Text>
    <Text
      m={{t: "1em"}}
      textSize="subheader"
      >
    Ủng hộ dự án của chúng tớ qua QR:
      </Text>
    <Image 
      src="/Donate.jpeg"
      width={500}
      height={600}
      style={{borderRadius: "10px"}}
      alt="Donation"
    />
  </Div>
  )
};

export default Donate
