// gtihub profile project
// apis -> https://api.github.com/users?per_page=10 , https://api.github.com/users?since=6000&per_page=10 , https://api.github.com/users?per_page=${count}


import React, { useEffect, useState } from 'react'

function Body(){
  
    const [Profile,setProfile] = useState([])
    const [numberofProfile,setnumberofProfile] = useState("")

    async function generateProfile(count){
        const ran = Math.floor(1+Math.random()*10000) // this is only for ki har bar new profiles aye ${ran}
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`)
      const data = await response.json()

      
      setProfile(data)
      console.group(data)
    }

    useEffect(()=>{
       generateProfile(10)   // initial 10 people set hai
    },[])
  
    return (
      <>
         
         {/* search functionality */}
        
        {/* *********** react ko control chaiye har chiz ka -> jo bhi value diye ho imput pe -> need state variable and onchange function or not -> yes so control apne pass agya react ke pass */}
        <div className='but'>
           <input type='number' placeholder='Search Profiles Here .............' className='inpu' value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
           {/* string to number convert by -> Number */}
           <button onClick={()=>generateProfile(Number(numberofProfile))}>Search Profiles</button> 
        </div>



    <div className='profiles'>
       
       {/* writing jsx inside js so {} use huye */}
        {
            Profile.map((value)=>{

            // we have to use return in map function -> by default single pe return ho jata hai -> for multiple things we use this return  
               
               return ( <div key={value.id} className='cards'>
                    <img src={value.avatar_url}></img>
                    <h2 className='op'>{value.login}</h2>
                    <a className='ops' href={value.html_url} target='_blank'>Profile</a>
                </div>
               )
            })
      
      }

    </div>

   </> 
  )
}

export default Body
