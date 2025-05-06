import React from 'react'

const Search = () => {
    
  return (
      <form className="w-[216px] border-b-[1px] flex flex-row text-base gap-2">
          <button type="submit">
              <svg className="w-6 h-6">
                  <use xlinkHref="/icons/sprite.svg#icon-search" />
              </svg>
          </button>
       <input type="text" autoComplete="off" autoFocus className="outline-none" placeholder="Search" name="search"/>
        </form>

  )
}

export default Search