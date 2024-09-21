import React from 'react'
import MetaTags from './MetaTags'

const Template = ({children,meta}) => {
  return (
    <div>
    <MetaTags meta={meta}/>
    {children}</div>
  )
}

export default Template