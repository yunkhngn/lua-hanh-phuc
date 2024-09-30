import React from 'react'
import {Div, Text} from 'atomize'
import Image from 'next/image'

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
          priority={true}
          style={{
            borderRadius: "50%",
            marginBottom: "2em",
            border: "7px solid #0A1F44"
          }}
          onDragStart={(e) => e.preventDefault()}
        />
        <Text
        textSize="display2"
        textWeight="600"
        m="auto"
        >Lửa hạnh phúc</Text>
        <Text
        textSize="subheader"
        color="black400"
        m={{b: "2em" }}
        >Một dự án của sinh viên trường đại học FPT</Text>
        <Text
        textSize="heading"
        m={{ t: "1em" }}
        w={{xs: "100%", md:"60%"}}
        >Lớp học hạnh phúc là tế bào làm nên môi trường hạnh phúc, mỗi ngày đến trường là 1 ngày vui. Người học thực hiện nhiệm vụ một cách chủ động, tích cực, thoải mái và khát khao nhất. Học sẽ cảm thấy có niềm tin, sự rung động, động lực đến lớp và yêu quý, mong mỏi những giờ học của mình.<br/><br/>
        Thấu hiểu được tầm quan trọng của những giá trị tốt đẹp của việc hình thành “Lớp học hạnh phúc” mang lại và ảnh hưởng tích cực tới nền giáo dục, dự án “Lửa hạnh phúc” được thành lập với mong muốn và sứ mệnh góp phần lan tỏa những giá trị tốt đẹp và hiệu quả mang lại tới các trường học, các cơ sở giáo dục, nhận thức của các bậc thầy cô và học sinh,... Với mục đích nhằm hướng tới việc hình thành các giá trị cốt lõi yêu thương, an toàn, tôn trọng, thấu hiểu.
        </Text>
        <Text
        textSize="subheader"
        m={{ t: "1em" }}
        w={{xs: "100%", md:"60%"}}
        ><q>Lớp học hạnh phúc là một khái niệm dần trở nên quen thuộc và vô cùng quan trọng trong ngành giáo dục. Bởi ngoài trang bị kiến thức, kỹ năng cho học sinh thì làm thế nào để trẻ “mỗi ngày đến trường là một ngày vui” được xem là mục tiêu mà bất kỳ một trường học nào cũng mong muốn đạt được.</q></Text>
      </div>
    </Div>
  )
}

export default AboutUs