"use client"
import Header from "@/Header";
import { Footer } from "@/Footer";
import { Menu } from "@/Menu";

import { Inter } from "next/font/google";
import "./globals.css";
import { store } from "@/redux/store";
import {Provider} from "react-redux"

const inter = Inter({ subsets: ["latin"] });

//export const metadata = {
  //title: "React App",
  //description: "Generated by create next app",
//};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
       
       <Provider store={store}>
          {
           
          children 
          
          }
        </Provider>
        </body>
    </html>
  );
}
