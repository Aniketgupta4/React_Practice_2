// custom hook file hai -> only for better readability and optimization 
// ********** adv -> ab in sab ko multiple spaces pe use kar shakte hai

import React from 'react'
import { useState, useEffect } from 'react';


function useFetch () {
  
    // ***** yaha likh do sab ab -> body ke satates wagera ko -> except jsx 
  

     const [Profile,setProfile] = useState([])
     const [numberofProfile,setnumberofProfile] = useState("")

    async function generateProfile(count){
        const ran = Math.floor(1+Math.random()*10000) // this is only for ki har bar new profiles aye ${ran}
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`)
        const data = await response.json()

      
      setProfile(data)
      console.log(data)
    }

    useEffect(()=>{
       generateProfile(10)   // initial 10 people set hai
    },[])
  



    // ***** jo jo function use honge body pe return kara do yaha se as object -> so body.js pe use kar shake
    // const {generateProfile,numberofProfile,setnumberofProfile,Profile} = useFetch()

    console.log("first fetch")
    return { generateProfile, numberofProfile, setnumberofProfile, Profile };

     // ----------------------------------------------------

}


export default useFetch
