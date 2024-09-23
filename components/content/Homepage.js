import React from "react";
import { ShowCase, AboutUs, Title, Info, Footer, ImageFull } from "@/components/template";

const Homepage = () => {
  return (
    <section>
      <ShowCase />
      <div className="wrapper">
        <Title
          label="Here starts your new professional life (All of our offers are not shown for confidentiality reasons)."
          pre="/."
          size="display2"
        >
          Dự án là gì
        </Title>
        <AboutUs />
        <Title
          label='"Điều khiến đứa trẻ đau khổ không phải là thiếu quần áo, đồ ăn, hay giáo dục mà là không được thuộc về ai và không có một gia đình."'
          pre="/."
          size="display2"
        >
          Hiện nay
        </Title>
        <ImageFull img="/placeholder.svg" text="homeImage" />

        <Title
          label="Here starts your new professional life (All of our offers are not shown for confidentiality reasons)."
          pre="/."
          size="display2"
        >
          Tầm nhìn và sứ mệnh
        </Title>
        <Info />

        <Footer />
      </div>
    </section>
  );
};

export default Homepage;
