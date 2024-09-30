import React from 'react'
import {Div, Button} from 'atomize'
const SidePanel = () => {
  return (
   <Div
    p="2em"
    w={{ xs: '100%', md: '50%' }}
    justify="center"
    align="left"
    d="flex"
    flexDir="column"
   >
      <div className="Heading">
        <h1 className="SidePanelFont">Lớp học<br/><span className="insideText">hạnh phúc</span></h1>
        <p className="Paragraph">Dự án Lửa hạnh phúc được thành lập nên với mong muốn truyền tải và xây dựng “Lớp học hạnh phúc” trong các cơ sở giáo dục và nhà trường.</p>
          <Button
          w="200px"
          m={{ t: '2em',b: '1em' }}
          bg="black900"
          hoverBg="black500"
          //scroll down 100vh
          onClick={() => window.scrollTo(0, 800)}
          >Tìm hiểu thêm</Button>
      </div>
    </Div>
  )
}

export default SidePanel