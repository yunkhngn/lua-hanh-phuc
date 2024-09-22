import React from 'react'
import Carousel from './Carousel'
import SidePanel from './SidePanel'
import {Div} from 'atomize'

const ShowCase = () => {
  return (
    <Div
    w="100%"
    h={{ xs: 'auto', md: '100vh' }}
    d="flex"
    flexDir={{ xs: 'column', md: 'row' }}
    justify="space-between"
    m={{ b: '5em' }}
    >
        <SidePanel />
        <Carousel />
    </Div>
  )
}

export default ShowCase