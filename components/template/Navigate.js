import React from 'react'
import styles from '@/styles/Navigate.module.css'
import Image from 'next/image'
const Navigate = () => {
  return (
    <div className={styles.container}>
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
    </div>
  )
}

export default Navigate