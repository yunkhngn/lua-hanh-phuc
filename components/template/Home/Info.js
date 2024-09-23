import React from 'react'
import {Div, Text} from 'atomize'
import {Table} from '../'

const Info = () => {

  const aim = [
    {
        "title": "Tạo môi trường thân thiện",
        "content": "Giáo viên được đào tạo để trở nên nhạy cảm hơn với cảm xúc của học sinh, nhằm tạo mối quan hệ tích cực và giảm căng thẳng học đường.",
        "img": "/placeholder.svg"
    },
    {
        "title": "Giảm áp lực học tập thi cử",
        "content": "Một số trường áp dụng các phương pháp học tập sáng tạo, khuyến khích sự phát triển tư duy sáng tạo thay vì tập trung vào kết quả thi cử.",
        "img": "/placeholder.svg"
    },
    {
        "title": "Quan tâm đến sức khỏe tinh thần",
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
            >Khung trường học Hạnh phúc theo cung cấp của UNESCO là một tầm nhìn về chất lượng giáo dục không chỉ tập trung vào các chỉ số nhận thức hoặc học thuật, mà còn thúc đẩy các kỹ năng cảm xúc xã hội như hạnh phúc, tình cảm, sự đồng cảm và phụ thuộc lẫn nhau.<br/><br/>
            Nói một cách đơn giản , trường học hạnh phúc là một ngày đến trường, giáo viên, học sinh đều cảm thấy là một ngày vui và thực sự ý nghĩa. Vì thế, nhiệm vụ của thầy cô giáo không chỉ đơn giản là lên lớp với những bài giảng trong sách vở và những vận dụng thực tế, mà còn là làm thế nào để học sinh thấy được ngôi trường của mình trở thành một nơi thú vị.
            </Text>
        </div>
        <Text
            m={{ t: "2em", b: "2em" }}
            w={{xs: "100%", md:"60%"}}
            justify="center"
            textAlign="center"
            textWeight="bold"
            textSize={{ xs: "heading", md: "display1" }}
            >Tại Việt Nam, nhiều trường học đã và đang triển khai mô hình này, tập trung vào các yếu tố như:
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
            ><q><i>Trên thế giới, đặc biệt là ở các nước phát triển như Phần Lan, Hàn Quốc, và Nhật Bản, mô hình “trường học hạnh phúc” cũng đã được áp dụng rộng rãi...</i></q>
            </Text>
    </Div>
  )
}

export default Info