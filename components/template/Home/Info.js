import React from 'react'
import {Div, Text} from 'atomize'
import {Table} from '../'

const Info = () => {

  const aim = [
    {
        "title": "Lorem Ipsum",
        "content": "Tạo ra một môi trường làm việc chuyên nghiệp, năng động, sáng tạo và phát triển bền vững.",
        "img": "/placeholder.svg"
    },
    {
        "title": "Lorem Ipsum",
        "content": "Tạo ra một môi trường làm việc chuyên nghiệp, năng động, sáng tạo và phát triển bền vững.",
        "img": "/placeholder.svg"
    },
    {
        "title": "Lorem Ipsum",
        "content": "Tạo ra một môi trường làm việc chuyên nghiệp, năng động, sáng tạo và phát triển bền vững.",
        "img": "/placeholder.svg"
    },
  ]

  return (
    <Div
    justify="center"
    align="center"
    m="auto"
    d="flex"
    flexDir="column"
    >
        <div className='Look'>
            <Text
            textSize={{ xs: "title", md: "heading" }}
            >lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
            <Text
            m={{ t: "1em", b: "3em" }}
            p={{ l: { xs: "0", md: "10em" } }}
            textSize={{ xs: "body", md: "paragraph" }}
            >
            lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  
            </Text>
        </div>
        <div className="suMenh">
        {aim.map((item,index) => (
            <Table
            key={index}
            title={item.title}
            color="white"
            img="/logo.png"
            >{item.content}</Table>
        ))}
        </div>
    </Div>
  )
}

export default Info