import React from 'react'

const FooterList = ({ title, items }) => {
  return (
    <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          {item.href ? (
            <a href={item.href} className="hover:underline">{item.label}</a>
          ) : (
            <span >{item.label}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default FooterList