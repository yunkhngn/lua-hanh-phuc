import React from 'react'
import {AboutUs, Title} from '../template/'

const About = () => {
  return (
    <section className='aboutUS wrapper'>
      <Title 
        label="Here starts your new professional life (All of our offers are not shown for confidentiality reasons)."
        pre="/ About us."
        >Về chúng tớ</Title>
      <AboutUs/>
    </section>
  )
}

export default About