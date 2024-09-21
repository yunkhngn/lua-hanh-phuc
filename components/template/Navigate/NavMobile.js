import React from 'react'
import {useState} from 'react'
import {Icon, Button,Collapse, Div} from 'atomize'

const NavMobile = () => {
    const [open, setOpen] = useState(false)
    
  return (
    <div>
      <Button
        h="3rem"
        w="100%"
        bg="white"
        rounded="10px"
        m="auto"
        onClick={() => setOpen(!open)}
        transition
      >
        <Icon name={open ? "Cross" : "Menu"} size="25px" color="black500" hoverColor="black900" transition/>
      </Button>
        <Div
        pos="fixed"
        w="50vw"
        m={{t: "1.5em", r: "0.5em"}}
        right="0"
        d={{ xs: open ? "flex" : "none", md: "none" }}
        flexDir="column"
        textAlign="center"
        p="10px"
        border="1px solid"
        borderColor="gray300"
        rounded="xl"
        >
            Chưa code
        </Div>
    </div>
  )
}

export default NavMobile