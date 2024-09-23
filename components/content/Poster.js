import React from 'react'
import {Title, Footer} from '../template'

const Poster = () => {
  return (
    <section className='poster wrapper'>
        <Title 
        label="Bài viết về dự án Lửa hạnh phúc và các hoạt động."
        pre="/ Post."
        size="display3"
        >Bài đăng</Title>
        <Footer/>
    </section>
  )
}

export default Poster