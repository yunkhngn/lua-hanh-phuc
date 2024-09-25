import React from "react";
import { Div, Text } from "atomize";
import Image from "next/image";
const Footer = () => {
  return (
    <Div m={{t: "5em"}}>
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
            >Dự án Lửa hạnh phúc, được thành lập nên với mong muốn truyền tải và lan tỏa giá trị tốt đẹp của mô hình “Trường học hạnh phúc” tiếp cận nhiều hơn tới các cơ sở giáo dục, trường học.</Text>
            <Text
            m={{t: "2em"}}
            textSize="subheader"
            >Email: luahanhphuc.project@gmail.com</Text>
            <Text
            textSize="subheader"
            >Tel: 0376971168 (Mr. Khoa)</Text>
        </Div>
      </Div>
      <hr className="footerHR" />
      <Div d="flex" justify="space-between" m={{ t: "2rem" }}>
        <Text textSize="body" textColor="gray800">
          Copyright © Lửa hạnh phúc Project
        </Text>
        <Text textSize="body" textColor="gray800">
          By Skibidi Team
        </Text>
      </Div>
    </Div>
  );
};

export default Footer;
