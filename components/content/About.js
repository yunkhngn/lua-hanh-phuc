import React from 'react'
import {AboutUs, Title, TeamMember} from '../template/'

const About = () => {
  return (
    <section className='aboutUS wrapper'>
      <Title 
        label="Here starts your new professional life (All of our offers are not shown for confidentiality reasons)."
        pre="/ About us."
        size="display3"
        >Về chúng tớ</Title>
      <AboutUs/>
      <Title 
        label="Here starts your new professional life (All of our offers are not shown for confidentiality reasons)."
        pre="Team member."
        size="display1"
        >Thành viên dự án</Title>
      <TeamMember/>
    </section>
  )
}

export default About