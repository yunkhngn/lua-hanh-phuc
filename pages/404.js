import React from 'react'
import {Template, Title} from '../components/template'
import Link from 'next/link'

const desc = {
    title: "Error 404!",
    description: "Page not found",
}

const ErrorPage = () => {
  return (
    <Template meta={desc}>
        <div className="wrapper">
            <Title
                pre="/ This does not exist"
                size="display3"
                label="Hình như cậu đã đi lạc rồi!"
            >Error 404!</Title>
            <Link href="/"><i>Quay trở lại trang chủ...</i></Link>
        </div>
    </Template>
  )
}

export default ErrorPage