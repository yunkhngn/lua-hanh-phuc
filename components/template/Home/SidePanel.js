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
        <h1 className="SidePanelFont">Sưởi ấm <br/> những <span className="insideText">trái tim</span><br/>yêu thương.</h1>
        <p className="Paragraph">Dự án mang tên Sưởi ấm, được lập nên với mong muốn tiếp sức và trao yêu thương, tiếp thêm động lực, lan tỏa năng lượng tích cực tới các em nhỏ mồ côi tại Làng trẻ em SOS.</p>
        <Button
        w="200px"
        m={{ t: '2em',b: '1em' }}
        bg="black900"
        >Đóng góp ngay</Button>
      </div>
    </Div>
  )
}

export default SidePanel