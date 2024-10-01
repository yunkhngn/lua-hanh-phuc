import React from 'react'
import {Div, Text} from 'atomize'
import {Table} from '../'

const Info = () => {

  const aim = [
    {
        "title": "Lớp học an toàn",
        "content": "Trẻ được đảm bảo an toàn về tinh thần, thể chất, không có tình trạng bạo hành, luôn gắn kết, giúp đỡ và tôn trọng.",
    },
    {
        "title": "Môi trường tốt",
        "content": "Lớp học thực hiện tốt nội quy, tạo cơ hội để học sinh phát huy tiềm năng. Lớp học đoàn kết, yêu thương, thấu hiểu lẫn nhau.",
    },
    {
        "title": "Tinh thần vui vẻ",
        "content": "Nhiều trường đã thiết lập các chương trình hỗ trợ tâm lý để giúp học sinh đối phó với căng thẳng, lo âu trong cuộc sống học đường.",
    },
  ]
  const student = [
    {
        "title": "Sự phát triển về nhận thức",
        "content": "Học sinh ở độ tuổi này có tâm lí muốn tìm tòi khám phá thế giới xung quanh, và khả năng tư duy trừu tượng và logic đang dần hình thành.",
    },
    {
        "title": "Sự phát triển về tâm lí",
        "content": "Học sinh lứa tuổi này rất nhạy cảm với các mối quan hệ xã hội, luôn muốn cảm giác thuộc về một nhóm nào đó, và đi tìm sự chấp nhận của bạn bè đồng trang lứa."
    },
    {
        "title": "Thay đổi về cảm xúc",
        "content": "Thường trải qua nhiều biến động cảm xúc do sự phát triển hormone, có thể cảm thấy lo lắng, vui vẻ, hay tức giận, ảnh hưởng đến hành vi và học tập."
    }
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
            >Tiêu chí xây dựng lớp học hạnh phúc bao gồm 3 yếu tố: 
            </Text>
        <div className="suMenh">
        {aim.map((item,index) => (
            <Table
            key={index}
            title={item.title}
            color="white"
            >{item.content}</Table>
        ))}
        </div>
        <Text
            m={{ t: "2em"}}
            w={{xs: "100%", md:"60%"}}
            justify="center"
            textAlign="center"
            textWeight="500"
            textSize={{ xs: "heading", md: "display1" }}
            ><q><i>Trên thế giới, đặc biệt là ở các nước phát triển như Phần Lan, Hàn Quốc, và Nhật Bản, các “lớp học hạnh phúc” cũng đã được xây dựng và áp dụng rộng rãi...</i></q>
            </Text>
            <Text
            m="2em auto 1em"
            w={{xs: "100%", md:"60%"}}
            justify="center"
            textAlign="center"
            textWeight="bold"
            textSize={{ xs: "heading", md: "display1" }}
            >Đặc điểm tâm lí của học sinh THCS
            </Text>
            <div className="suMenh">
        {student.map((item,index) => (
            <Table
            key={index}
            title={item.title}
            color="white"
            >{item.content}</Table>
        ))}
        </div>
    </Div>
  )
}

export default Info