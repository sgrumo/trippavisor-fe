import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full">
      <div>
        <a href="#">
          <Image src="/assets/images/shared/logo.svg" width={224} height={64} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
