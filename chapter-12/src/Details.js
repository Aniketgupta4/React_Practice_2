import React from 'react'
import { Outlet } from 'react-router'

function Details () {
  return (
    <div> 


         <h1>Details are coming soon</h1>


        {/* 1) use outlet to show content of nested routing
            2) <Outlet /> ek placeholder hai jaha pe child routes render hote hain.
            3) Jab tum ek parent route banate ho aur uske andar nested routes define karte ho, tab parent component me <Outlet /> likhna padta hai taaki child components waha show ho. 
        */}

           <h2>nested wale ka content show niche </h2>
            <Outlet />
       
    </div>
  )
}

export default Details
