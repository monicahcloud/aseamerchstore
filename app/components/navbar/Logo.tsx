import React from 'react'
import logo from '@/public/healthycells.jpg'
import Link from 'next/link'
import Image from 'next/image'

function Logo() {
  return (
   
    <Link href='/'>
   <Image src={logo} alt='Logo' width='200' height='200'/>
    </Link>
 
  )
}

export default Logo