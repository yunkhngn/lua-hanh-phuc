import React from 'react'
import {ShowCase, AboutUs, Title, Info, Footer} from '@/components/template'

const Homepage = () => {
  return (
    <section>
      <ShowCase />
      <div className="wrapper">
      <Title 
        label="Here starts your new professional life (All of our offers are not shown for confidentiality reasons)."
        pre="/."
        size="display2"
        >Dự án là gì</Title>
      <AboutUs/>
      <Title 
        label="Here starts your new professional life (All of our offers are not shown for confidentiality reasons)."
        pre="/."
        size="display2"
        >Tầm nhìn và sứ mệnh</Title>
      <Info/>
      <Footer/>
      </div>
    </section>
  )
}

export default Homepage