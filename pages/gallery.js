import React from 'react'
import {Template} from '../components/template'
import {desc} from '../components/lib/'
import {Pics} from '../components/content/'

const gallery = () => {
  return (
    <Template meta={desc.gallery}>
     <Pics />
    </Template>
  )
}

export default gallery