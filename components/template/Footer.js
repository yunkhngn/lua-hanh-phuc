import React from "react";
import { Div, Text } from "atomize";
import Image from "next/image";
const Footer = () => {
  return (
    <Div>
      <hr className="footerHR" />
      <Div
      w="100%"
      m={{ t: "3em" }}
      p={{y: "1em"}}
     d={{ xs: "block", md: "flex" }}
   justify="space-between"
      >
        <Div
        w={{ xs: "100%", md: "40%" }}
        textAlign="left"
        d="flex"
        justify="center"
        align="center"
        flexDir="column"
        >
            <Image
                src="/fpt.jpg"
                alt="Logo"
                width={100}
                height={100}
            
            />
            <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={100}     
            />
        </Div>
        <Div
        w={{ xs: "100%", md: "60%" }}
        m={{ t: { xs: "3em", md: "0" } }}
        >
            <Text
            textSize="title"
            >Dự án mang tên Sưởi ấm, được lập nên với mong muốn tiếp sức và trao yêu thương, tiếp thêm động lực, lan tỏa năng lượng tích cực tới các em nhỏ mồ côi tại Làng trẻ em SOS.</Text>
            <Text
            m={{t: "2em"}}
            textSize="subheader"
            >Email: suoiam.project@gmail.com</Text>
            <Text
            textSize="subheader"
            >Tel: 0376971168 (Mr. Khoa)</Text>
        </Div>
      </Div>
      <hr className="footerHR" />
      <Div d="flex" justify="space-between" m={{ t: "2rem" }}>
        <Text textSize="body" textColor="gray800">
          Copyright © Sưởi ấm
        </Text>
        <Text textSize="body" textColor="gray800">
          By Skibidi Team
        </Text>
      </Div>
    </Div>
  );
};

export default Footer;
