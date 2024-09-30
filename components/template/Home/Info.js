import React from 'react'
import {Div, Text} from 'atomize'
import {Table} from '../'

const Info = () => {

  const aim = [
    {
        "title": "Lớp học an toàn",
        "content": "Trẻ được đảm bảo an toàn về tinh thần, thể chất, không có tình trạng bạo hành, luôn gắn kết, giúp đỡ và tôn trọng.",
        "img": "/placeholder.svg"
    },
    {
        "title": "Môi trường tốt",
        "content": "Lớp học thực hiện tốt nội quy, tạo cơ hội để học sinh phát huy tiềm năng. Lớp học đoàn kết, yêu thương, thấu hiểu lẫn nhau.",
        "img": "/placeholder.svg"
    },
    {
        "title": "Tinh thần vui vẻ",
        "content": "Nhiều trường đã thiết lập các chương trình hỗ trợ tâm lý để giúp học sinh đối phó với căng thẳng, lo âu trong cuộc sống học đường.",
        "img": "/placeholder.svg"
    },
  ]

  return (
    <Div
    justify="center"
    align="center"
    m="auto"
    d="flex"
    flexDir="column"
    >
        <div className='Look'>
            <Text
            textSize={{ xs: "title", md: "heading" }}
            >“Lớp học hạnh phúc” trong đó bao gồm mối quan hệ giữa các học sinh, đóng vai trò quan trọng trong việc tạo dựng một môi trường học đường tích cực và phát triển toàn diện. Thay vì tập trung vào áp lực thành tích và sự cạnh tranh, xây dựng mô hình khuyến khích học sinh hợp tác và xây dựng những mối quan hệ tôn trọng lẫn nhau.<br/><br/>
            Nói một cách đơn giản , lớp học hạnh phúc là một ngày đến trường, giáo viên, học sinh đều cảm thấy là một ngày vui và thực sự ý nghĩa. Vì thế, nhiệm vụ của thầy cô giáo không chỉ đơn giản là lên lớp với những bài giảng trong sách vở và những vận dụng thực tế, mà còn là làm thế nào để học sinh thấy được ngôi trường của mình trở thành một nơi thú vị. Hơn thế nữa, trong chính nhận thức của các em, cần tôn trọng và được tôn trọng những khác biệt, tính cách, sở thích làm nên cá nhân của mỗi người.
            </Text>
        </div>
        <Text
            m={{ t: "2em", b: "2em" }}
            w={{xs: "100%", md:"60%"}}
            justify="center"
            textAlign="center"
            textWeight="bold"
            textSize={{ xs: "heading", md: "display1" }}
            >Môi trường học an toàn, thân thiện là 1 tiêu chí xây dựng lớp học hạnh phúc, bao gồm 3 yếu tố: 
            </Text>
        <div className="suMenh">
        {aim.map((item,index) => (
            <Table
            key={index}
            title={item.title}
            color="white"
            img="/logo.png"
            >{item.content}</Table>
        ))}
        </div>
        <Text
            m={{ t: "2em", b: "2em" }}
            w={{xs: "100%", md:"60%"}}
            justify="center"
            textAlign="center"
            textWeight="500"
            textSize={{ xs: "heading", md: "display1" }}
            ><q><i>Trên thế giới, đặc biệt là ở các nước phát triển như Phần Lan, Hàn Quốc, và Nhật Bản, các “lớp học hạnh phúc” cũng đã được xây dựng và áp dụng rộng rãi...</i></q>
            </Text>
    </Div>
  )
}

export default Info