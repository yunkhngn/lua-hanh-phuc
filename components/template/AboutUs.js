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
        >Trường hạnh phúc là nơi mà tình yêu thương giữa thầy và trò, giữa các học sinh, giữa các giáo viên được trân trọng và bồi đắp hàng ngày. Môi trường giáo dục chú trọng giảng dạy không chỉ kiến thức, kỹ năng học sinh còn thiếu mà còn hỗ trợ, tạo điều kiện để trẻ phát huy tối đa tiềm năng, niềm yêu thích và say mê học tập.<br/><br/>
        Thấu hiểu được tầm quan trọng của những giá trị tốt đẹp của mô hình “Trường học hạnh phúc” mang lại và ảnh hưởng tích cực tới nền giáo dục, dự án Lửa hạnh phúc được thành lập với mong muốn và sứ mệnh góp phần lan tỏa những giá trị tốt đẹp mà mô hình giáo dục này mang lại tới các trường học, các cơ sở giáo dục, nhận thức của các bậc thầy cô và học sinh,... Với mục đích nhằm hướng tới việc hình thành các giá trị cốt lõi yêu thương, an toàn, tôn trọng, thấu hiểu.
        </Text>
        <Text
        textSize="subheader"
        m={{ t: "1em" }}
        w={{xs: "100%", md:"60%"}}
        ><q>Trường học hạnh phúc là một khái niệm dần trở nên quen thuộc và vô cùng quan trọng trong ngành giáo dục. Bởi ngoài trang bị kiến thức, kỹ năng cho học sinh thì làm thế nào để trẻ “mỗi ngày đến trường là một ngày vui” được xem là mục tiêu mà bất kỳ một trường học nào cũng mong muốn đạt được.</q></Text>
      </div>
    </Div>
  )
}

export default AboutUs