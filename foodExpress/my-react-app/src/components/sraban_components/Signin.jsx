import React, { useState ,} from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Signin.module.css";


export const Signin =()=>{
const navigator=useNavigate()

const [number,setnumber]=useState("")
let handlechange=(e)=>{
    setnumber(e.target.value)
    console.log(e.target.value)}

    let sendmecode=()=>{
        
        
        alert("Your One Time Password is 6894")
        navigator("/Otp")
        let mob = document.getElementbyId("phone").value;
        
        
    }


return(
    <div id={styles.centre}>
        <div className={styles.header}>Sign In / Sign up
        
        
        </div>
        <div className={styles.logoimg}><img src="https://foodexpress.app/storage/app/public/business/2023-03-16-6413256d977dd.png"
                 alt="noimg" /></div>
        <div className={styles.siocawp}>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</div>

       
            <input  className={styles.phoneNumberId} id="phone" type="number" onChange={handlechange} placeholder="Phone Number*"  />
           
        <div className={styles.privacypolicy}>By “logging in to foodExpress”, you agree to our 
            <a href="https://online.kfc.co.in/privacyPolicy"><b> Privacy Policy </b></a>
             and 
             <a href="https://online.kfc.co.in/terms-and-conditions"><b> Terms & Conditions</b></a>
             .</div>

             <div class={styles.btnDiv}>
            <button id="btnSendCode" class={styles.btnSendCode} onClick={sendmecode} >Send Me a Code</button>
        </div> 
        <div class={styles.orDiv}>
                <div class={styles.orLeft}></div>
                <div class={styles.orCenter}>or</div>
                <div class={styles.orRight}></div>

            </div>

            <div class={styles.skipBtnDiv}>
                <button class={styles.skipBtn} id="skipBtn" >Skip, Continue As Guest</button>
            </div>   
   
    </div>


)


}