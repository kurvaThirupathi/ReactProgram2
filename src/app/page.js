"use client"
import Image from "next/image";
import { Login } from "@/Login";
import  Header  from "@/Header";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Home() {
  //const [isLoadHome, setIsLogged]=useState(false)
  const isLoadHome=useSelector((state)=>{
      return state?.appReducer?.isLoadHome
  })
  return <div>
          
          {
            //setIsLogged={setIsLogged}
            isLoadHome ? <Header />:<Login /> 
          }
        </div>
  
}
