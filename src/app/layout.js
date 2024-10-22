
import "bootstrap/dist/css/bootstrap.css"
import { Inter } from "next/font/google";
import "./globals.css";
import Nabvar from "./Componets/Nabvar";
import Footer from "./Componets/Footer";
import ReduxProvider from "./layoutReduxPro";





const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mai Portafolio",
  description: "Generated and create  by MaiKyng",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={inter.className}>
        
       <ReduxProvider>
        <Nabvar></Nabvar>
        
        
        {children}

        <Footer></Footer>
        
        </ReduxProvider>
        </body>
    </html>
  );
}
