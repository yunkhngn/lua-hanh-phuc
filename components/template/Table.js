import React from 'react'
import {Div,Text} from 'atomize'
import Image from 'next/image'

const Table = ({children, color, title, img}) => {
  return (
    <Div
    bg={color}
    w="100%"
    justify="center"
    align="center"
    d="flex"
    flexDir="column"
    rounded="16px"
    border="1px solid"
    borderColor="gray400"
    className="suMenhTag"
    >
      <Div
      p={{ x: "2em", y: "0.5em" }}
      >
        <Text
        m={{ b: "0.4em", t:"0.4em" }}
        textSize="display1"
        textWeight="600"
        >{title}</Text>
        <Text
        m={{ b: "2em"}}
        textSize="title"
        >{children}</Text>
        </Div>
    </Div>
  )
}

export default Table