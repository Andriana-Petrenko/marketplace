
import Logo from "./components/Logo";
import NavMenu from "./components/NavMenu";
import Search from "./components/Search";
import Shopping from "./components/Shopping";
import "./globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
 


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header className="flex flex-row justify-between items-center bg-(--main) py-6 px-16 border-b-[1px]"> 
          <NavMenu />
          <Logo />
          <Search/>
          <Shopping/>
        </header>
        {children}
        <footer  className="bg-(--main) py-14 px-16">footer</footer>
      </body>
    </html>
  );
}
