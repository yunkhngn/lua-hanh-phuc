import React from 'react'
import {Div, Text} from 'atomize'
import Image from 'next/image'
import Table from './Table'

const AboutUs = () => {
  return (
    <Div
    justify="center"
    align="center"
    m="auto"
    d="flex"
    flexDir="column"
    >
      <div className="avatar">
        <Image
          src="/logo.png"
          alt="Picture of team"
          width={300}
          height={300}
          style={{
            borderRadius: "50%",
            marginBottom: "1em",
          }}
          onDragStart={(e) => e.preventDefault()}
        />
        <Text
        textSize="display2"
        textWeight="600"
        m="auto"
        >Dự án Sưởi ấm</Text>
        <Text
        textSize="subheader"
        color="black400"
        m={{b: "2em" }}
        >Một dự án của sinh viên trường đại học FPT</Text>
        <Text
        textSize="heading"
        m={{ t: "1em" }}
        w={{xs: "100%", md:"60%"}}
        >lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        <Text
        textSize="subheader"
        m={{ t: "1em" }}
        w={{xs: "100%", md:"60%"}}
        ><q>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q></Text>
      </div>
    </Div>
  )
}

export default AboutUs