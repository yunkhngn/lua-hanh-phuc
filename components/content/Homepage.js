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
          label='"Môi trường giáo dục hạnh phúc hướng đến mục tiêu tạo dựng môi trường lý tưởng cho giáo viên và người học đều cảm thấy hạnh phúc, có hành vi và tâm hồn đẹp. Thầy cô giáo và học sinh có cơ hội phát triển toàn diện, thúc đẩy một tương lai trường học cấp tiên và thân thiện. Mọi cảm xúc riêng biệt, sự sáng tạo, cá tính của giáo viên và học sinh được tôn trọng, không bị ép buộc hay rập khuôn máy móc theo phương cách giáo dục lỗi thời, xưa cũ."'
          pre="/."
          size="display2"
        >
          Trường học hạnh phúc là gì?
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
