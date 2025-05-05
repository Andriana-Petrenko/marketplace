import React from 'react'

const Shopping = () => {
  return (
      <ul className="flex flex-row gap-4">
          <li>
              <button type="button">
                  <svg className="w-6 h-6">
              <use  xlinkHref="/icons/sprite.svg#icon-person"  />
              </svg>
              </button>
          </li>
          <li>
              <button type="button">
                  <svg className="w-6 h-6">
              <use  xlinkHref="/icons/sprite.svg#icon-favorite"  />
              </svg>
              </button>
          </li>
          <li>
              <button type="button">
                  <svg className="w-6 h-6">
              <use  xlinkHref="/icons/sprite.svg#icon-shopping-bag"  />
              </svg>
              </button>
          </li>
    </ul>
  )
}

export default Shopping