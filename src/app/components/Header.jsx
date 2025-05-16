import React from 'react';
import NavMenu from './NavMenu';
import Logo from './Logo';
import Search from './Search';
import Shopping from './Shopping';



const Header = () => {
  return (
     <header className="bg-main border-b-[1px] border-text py-6 "> 
          <div className="flex max-w-container mx-auto justify-between items-center px-16">
            <NavMenu />
            <Logo width={106} height={32} />
           <div className="flex flex-row gap-9">
              <Search/>
              <Shopping/>
            </div>
          </div>
     </header>
  )
}

export default Header