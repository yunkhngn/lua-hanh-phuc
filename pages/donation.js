import React from 'react'
import {Template} from '../components/template'
import {desc} from '../components/lib/'
import {Fund} from '../components/content/'

const donation = () => {
  return (
    <Template meta={desc.funding}>
      <Fund/>
    </Template>
  )
}

export default donation