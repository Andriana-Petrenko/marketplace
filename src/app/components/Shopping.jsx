import Image from 'next/image'
import React from 'react'

const Shopping = () => {
  return (
    <ul className="flex flex-row gap-4">
          <li>
              <button type="button">
                  <Image
                        width={24}
                        height={24}
                        src="/icons/person.svg"
                        alt="search"
                    />
              </button>
          </li>
          <li>
              <button type="button">
                  <Image
                        width={24}
                        height={24}
                        src="/icons/favorite.svg"
                        alt="search"
                  />
              </button>
          </li>
          <li>
              <button type="button">
                  <Image
                        width={24}
                        height={24}
                        src="/icons/shopping_bag.svg"
                        alt="search"
                    />
              </button>
          </li>
    </ul>
  )
}

export default Shopping