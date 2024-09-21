import React from 'react'
import styles from '@/styles/Navigate.module.css'
import Image from 'next/image'
import IconNav from "./IconNav"
import {navRoute} from '../../lib'

const Navigate = () => {
  return (
    <div className={styles.container}>
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <div className={styles.nav}>
          {navRoute.map((item, index) => (
            <IconNav key={index} name={item.name} route={item.route} />
          ))}
        </div>
        <div className={styles.setting}>
          setting
        </div>
    </div>
  )
}

export default Navigate