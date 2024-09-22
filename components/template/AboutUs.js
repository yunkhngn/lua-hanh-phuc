import React from 'react'
import {Div, Text} from 'atomize'
import Image from 'next/image'
import {Title} from './'

const AboutUs = () => {
  return (
    <Div
    justify="center"
    align="center"
    m="auto"
    d="flex"
    flexDir="column"
    >
      <Title label="Here starts your new professional life (All of our offers are not shown for confidentiality reasons).">Về chúng tớ</Title>
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
        w="50%"
        textSize="heading"
        m={{ t: "1em" }}
        >lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
      <Text
      m={{ t: "1em" }}
      textSize="display1"
      textWeight="600"
      textAlign="left"
      >Sứ mệnh</Text>
      <div className="suMenh">
        <Text>lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        <Text>lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        <Text>lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        <Text>lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
      </div>
      </div>
    </Div>
  )
}

export default AboutUs