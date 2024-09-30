import React from 'react'
import {Div, Text} from 'atomize'
const Contact = () => {
  return (
    <Div 
    w={{ xs: "100%", md: "50%" }}
    >
        <Text
        textSize="heading"
        >Liên hệ với chúng tớ để biết thêm thông tin về dự án Lửa hạnh phúc.</Text>
        <br/>
        <Text
        textSize="subheader"
        >
        <i>
        Dự án Lửa hạnh phúc được thành lập nên với mong muốn truyền tải và xây dựng các “Lớp học hạnh phúc” trong các cơ sở giáo dục và nhà trường.
        </i>
        </Text>
        <Text
        textSize="subheader"
        >Trưởng dự án: Nguyễn Đăng Khoa</Text>
        <Text
        textSize="subheader"
        >Giảng viên hướng dẫn: Khuất Thị Hoa</Text>
        <Text
        textSize="subheader"
        >Gmail: luahanhphuc@gmail.com</Text>
        <Text
        textSize="subheader"
        >Facebook: Lửa Hạnh Phúc</Text>
    </Div>
  )
}

export default Contact