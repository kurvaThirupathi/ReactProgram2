import React from "react";
import style from "./menu.module.css"
import Link from "next/link";
export const Menu= ()=>{
    return <div>
        <ul className={style.menuList}>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </div>

}