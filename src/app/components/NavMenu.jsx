import Link from 'next/link'
import React from 'react'

const NavMenu = () => {
  return (
    <nav class="flex flex-row gap-9 text-base">
      <Link href="/products"> Catalog </Link>
      <Link href="#"> About us </Link>
      <Link href="#"> Collections </Link>
    </nav>
  )
}

export default NavMenu