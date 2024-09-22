import React from 'react'
import {Template} from '../components/template'
import {desc} from '../components/lib/'
import {Poster} from '../components/content/'

const post = () => {
  return (
    <Template meta={desc.post}>
     <Poster/>
    </Template>
  )
}

export default post