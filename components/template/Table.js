import React from 'react'
import {Div,Text} from 'atomize'
const Table = ({children, color, title}) => {
  return (
    <Div
    bg={color}
    w="100%"
    p={{ x: "1em", y: "1em" }}
    justify="center"
    align="center"
    d="flex"
    flexDir="column"
    h="300px"
    >
        <Text>{title}</Text>
        <Text>{children}</Text>
    </Div>
  )
}

export default Table