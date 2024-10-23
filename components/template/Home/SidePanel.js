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
        <p className="Paragraph">Dự án Lửa hạnh phúc được thành lập nên với mong muốn truyền tải và xây dựng “Lớp học hạnh phúc” trong các cơ sở giáo dục và nhà trường.</p>
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