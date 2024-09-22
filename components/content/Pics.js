import React from "react";
import Image from "next/image";
import { Div } from "atomize";
import {Title} from '../template'
const Pics = ({ data }) => {
  return (
    <div className="wrapper">
    <Title 
        label="Here starts your new professional life (All of our offers are not shown for confidentiality reasons)."
        pre="/ Gallery."
        >Thư viện</Title>
    <section className="picsGallery">
      {data.length > 0 ? (data.map((item) => (
        <div key={item.id} className="picHolder">
          <Image
            src={item.image}
            alt="Picture"
            fill
            priority={true}
            style={{
              objectFit: "cover",
            }}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      ))) : 
      <Div>
        Chưa có ảnh nào được đăng tải...
      </Div>
      }
    </section>
    </div>
  );
};

export default Pics;
