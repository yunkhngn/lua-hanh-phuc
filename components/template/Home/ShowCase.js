import React from 'react'
import Carousel from './Carousel'
import SidePanel from './SidePanel'
import {Div} from 'atomize'

const ShowCase = () => {
  return (
    <Div
    w="100%"
    h="100%"
    d="flex"
    flexDir={{ xs: 'column', md: 'row' }}
    justify="space-between"
    >
        <SidePanel />
        <Carousel />
    </Div>
  )
}

export default ShowCase