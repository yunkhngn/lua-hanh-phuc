import React from 'react'
import {Template} from '../components/template'
import {desc} from '../components/lib/'
import {Mail} from '../components/content/'
const contact = () => {
  return (
    <Template meta={desc.contact}>
      <Mail/>
    </Template>
  )
}

export default contact