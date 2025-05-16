import React from 'react'
import FooterList from './FooterList';
import Logo from './Logo';

const Footer = () => {
    const footerData = [
        {
          title: 'CATALOG',
          items: [
            { label: 'All', href: '/catalog' },
            { label: 'Rings', href: '/catalog/rings' },
            { label: 'Earrings', href: '/catalog/earrings' },
            { label: 'Necklaces', href: '/catalog/necklaces' },
            { label: 'Bracelets', href: '/catalog/bracelets' },
            { label: 'Sale', href: '/catalog/sale' },
          ],
        },
        {
          title: 'COLLECTIONS',
          items: [
            { label: 'Moonlight Gold', href: '/collections/moonlight-gold' },
            { label: 'Golden Rays', href: '/collections/golden-rays' },
            { label: 'Beyond Limits', href: '/collections/beyond-limits' },
            { label: 'Where Sky Begins', href: '/collections/where-sky-begins' },
          ],
        },
        {
          title: 'CUSTOMERS',
          items: [
            { label: 'About us', href: '/about' },
            { label: 'Delivery and payment', href: '/delivery' },
            { label: 'Returns', href: '/returns' },
          ],
        },
        {
          title: 'CONTACT',
          items: [
            { label: '+38 (067) 123 45 67' },
            { label: 'hello@solena.jewelry' },
            { label: 'Instagram', href: 'https://instagram.com' },
            { label: 'Facebook', href: 'https://facebook.com' },
          ],
        },
      ];

  return (
      <footer className="bg-main px-16 py-14">
          <div className="flex max-w-container justify-between items-center mx-auto pb-14  border-b-[1px] border-secondary">
            <Logo width={255} height={104}/>
            <div className="flex flex-wrap gap-10 justify-between ">
                {footerData.map((col, index) => (
                    <FooterList key={index} title={col.title} items={col.items} />
                ))}
            </div>
          </div>
      </footer>
  )
}

export default Footer