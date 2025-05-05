import React from 'react'

const Search = () => {
    // const handleOnSubmit = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const inputSearch = form.elements.search.value;
        // if (inputSearch.trim() === "") {
        //     toast('Please enter search term!', {
        //         style: {
        //             borderRadius: '10px',
        //             background: 'rgb(73, 248, 42)',
        //             color: '#000',
        //         },
        //     });
        //     return;
        // }
        // onSubmit(inputSearch);
    // }
  return (
      <form className="w-[216px] border-b-[1px] flex flex-row text-base"
    //   onSubmit={handleOnSubmit}
      >
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