"use client"
import React, { useState } from "react";
import styles from "./Login.module.css"
import Image from 'next/image'
import {useDispatch} from "react-redux"
// {setIsLogged}
  export const Login =()=>{
    const [data, setData]=useState({});
    const [msg,setMsg]=useState("")
    const dispatch=useDispatch();
    const handleChange = (eve) => {
        const {id,value}=eve.target
        //console.log(eve.target.id, eve.target.value)
        setData({...data,[id]:value})
    
        }
       const loginView=() =>{
        const {name,pwd}=data; // id values name,pwd
           // console.log(data);
            if(name==="Thirupathi" && pwd==="thirupathi"){
               // alert("Success");
               //setIsLogged(true);
               dispatch({type:"",payload:true})
            }
            else{
                //alert("fail");
                setMsg("Please enter valid Name & Password")
            }
       }
    return <div className="loginBody">
        <section className={styles.loginSection}>
            <div className="container p-3">
                <div className="grid grid-cols-2 gap-1 justify-evenly">
                    <div className={styles.loginFormData}>
                        <div className="mt-3">
                            <h3 style={{ fontSize: "1.5rem" }}>Login</h3>
                        </div>
                        <div className="mt-4">
                        <form>
                        <div className="mb-2">
                            <label className={styles.labelNames} style={{display:"block"}}>Name</label>
                            <input  type='text' className={styles.labelinput} id="name" name="name" placeholder="Name" onChange={handleChange} />
                        </div>
                        <div className="mb-2">
                            <label className={styles.labelNames} style={{display:"block"}}>Password</label>
                            <input type="password" className={styles.labelinput} id="pwd" name="pwd" placeholder="Password" onChange={handleChange} />
                            <div className={styles.forgotpassword}>
                                    <a href="javascript:void(0)">Forgot Password?</a>
                            </div>
                        </div>
                        
                        <div className="buttonWidth">
                            <button type="button" className={styles.btnView} onClick={loginView}>LOGIN</button>
                        </div>
                        <div style={{color:"red",fontSize:"14px",marginTop:"5px",textAlign:"center"}}>
                            {msg}
                        </div>

                        </form>
                        </div>
                    </div>
                    <div className="ml-4">
                    <Image src="/login.png" width={500} height={500} alt="Picture of the author"
                        />
                    </div>
                </div>

            </div>

        </section>

       
        </div>
  }