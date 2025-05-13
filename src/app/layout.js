import "./globals.css";
import Header from "./components/Header";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
 


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
       <Header/>
       
        {children}
        <footer  className="bg-(--main) py-14 px-16">footer</footer>
      </body>
    </html>
  );
}
