import React from 'react'
import {Title, Footer, Donate} from '../template'
const Fund = () => {
  return (
    <section className='fund wrapper'>
        <Title 
        label="Ủng hộ vào quỹ hoạt động của dự án"
        pre="/ Donation."
        size="display3"
        >Ủng hộ dự án</Title>
        <Donate/>
        <Footer/>
    </section>
  )
}

export default Fund
