import React from "react";
import { ShowCase, AboutUs, Title, Info, Footer, ImageFull } from "@/components/template";

const Homepage = () => {
  return (
    <section>
      <ShowCase />
      <div className="wrapper">
        <Title
          label="Giới thiệu thông tin về dự án."
          pre="/."
          size="display2"
        >
          Dự án là gì
        </Title>
        <AboutUs />
        <Title
          label='"Lớp học hạnh phúc là môi trường học đường nơi mà học sinh và giáo viên hình thành, duy trì các trạng thái cảm xúc tích cực, cảm thấy hạnh phúc. Tham gia vào lớp học hạnh phúc sẽ thiết lập được tình cảm lành mạnh, góp phần vào sự phát triển nhân cách tốt đẹp cho mỗi cá nhân. Đây chính là nơi mà mỗi cá nhân muốn đến và có sự mong chờ, hứng thú, rung cảm. Lớp học hạnh phúc làm cho mỗi người cảm nhận được sự an toàn, thú vị, sự nâng đỡ khi có nhiều nhu cầu được thỏa mãn."'
          pre="/."
          size="display2"
        >
          Lớp học hạnh phúc là gì?
        </Title>
        <ImageFull img="/logo.png" text="homeImage" />

        <Title
          pre="/."
          size="display2"
          label="Bối cảnh hiện nay."
        >
          Bối cảnh
        </Title>
        <Info />
        
        <ImageFull img="/logo.png" text="homeImage" />
        <Footer />
      </div>
    </section>
  );
};

export default Homepage;
