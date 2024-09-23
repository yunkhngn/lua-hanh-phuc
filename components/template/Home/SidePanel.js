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
        <h1 className="SidePanelFont">Trường học<span className="insideText">hạnh phúc</span></h1>
        <p className="Paragraph">Dự án Lửa hạnh phúc, được thành lập nên với mong muốn truyền tải và lan tỏa giá trị tốt đẹp của mô hình “Trường học hạnh phúc” tiếp cận nhiều hơn tới các cơ sở giáo dục, trường học.</p>
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