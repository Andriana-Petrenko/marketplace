import Image from 'next/image'
import React from 'react'

const Search = () => {
    
  return (
      <form className="w-[216px] border-b-[1px] border-text flex flex-row text-base gap-2">
          <button type="submit">
              <Image
                  width={24}
                  height={24}
                  src="/icons/search.svg"
                  alt="search"
                />
          </button>
       <input type="text" autoComplete="off" autoFocus className="outline-none bg-main text-base font-medium text-text placeholder-grey focus:text-text "  placeholder="Search" name="search"/>
        </form>

  )
}

export default Search