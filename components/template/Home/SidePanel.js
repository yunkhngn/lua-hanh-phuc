import React from 'react'
import {Div, Button, scrollTo} from 'atomize'
const SidePanel = () => {
  return (
   <Div
    p="2em"
    w={{ xs: '100%', md: '50vw' }}
    h={{ xs: 'auto', md: '100vh' }}
    justify="center"
    align="left"
    d="flex"
    flexDir="column"
   >
      <div className="Heading">
        <h1 className="SidePanelFont">Hành Trình <span className="insideText">SSG</span></h1>
        <p className="Paragraph">Hành trình SSG là kho lưu trữ các dự án SSG qua các kỳ, đồng thời là cầu nối kết nối các thế hệ sinh viên. Tại đây, sinh viên có thể chia sẻ và học hỏi từ những kinh nghiệm thực tế của các dự án SSG trước đây.</p>
          <Button
          w="200px"
          m={{ t: '2em',b: '1em' }}
          bg="black900"
          hoverBg="black500"
          onClick={() => scrollTo("#homePageTag", 0, 0, 100)}
          >Tìm hiểu thêm</Button>
      </div>
    </Div>
  )
}

export default SidePanel