import React from 'react';
import NavMenu from './NavMenu';
import Logo from './Logo';
import Search from './Search';
import Shopping from './Shopping';



const Header = () => {
  return (
     <header className="flex flex-row justify-between items-center bg-(--main) py-6 px-16 border-b-[1px]"> 
          <NavMenu />
          <Logo />
         <div className="flex flex-row gap-9">
            <Search/>
            <Shopping/>
          </div>
          
     </header>
  )
}

export default Header