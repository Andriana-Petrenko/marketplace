import Image from 'next/image'
import React from 'react'

const Logo = ({width, height}) => {
  return (
    <Image width={width}
    height={height}
    // className="w-[106px] h-[32px]"
    src="/icons/logo.svg"
    alt="logo"
  />)
}

export default Logo

