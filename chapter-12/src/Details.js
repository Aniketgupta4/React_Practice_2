import React from 'react'
import { Link, Outlet } from 'react-router'

function Details () {
  return (
    <div> 


         <h1>Details are coming soon</h1>
         {/* navigation link yaha pe banao */}
         {/* ****** basically ye bhi browserrouter ke ander hi hai -> kyuki ye script.js se select hoga usme hi nested routing hai -> details script.js ke browser routet ke ander hi aara hai and apan nav ko browserrouter ke ander hi hamesha likhte hai */}
            <nav>
                <Link to="/Details">Details</Link>
                {/* nested wale hai so relative path -> not use "/......" */}
                <Link to="Hello">Hello</Link>
                <Link to="Hi">Hi</Link>
            </nav>


        {/* 1) use outlet to show content of -> nested routing
            2) <Outlet /> ek placeholder hai jaha pe child routes render hote hain.
            3) Jab tum ek parent route banate ho aur uske andar nested routes define karte ho, tab parent component me <Outlet /> likhna padta hai taaki child components waha show ho. 
            4) outlet wala nested walo leke and yaha pe render kara deta hai -> outlet kahi pe bhi use kar shakte ho -> nested wale outlet ke ander chala jayega and render hoga yaha 
        */}

           <h2>nested wale ka content show niche </h2>
            <Outlet />
       
    </div>
  )
}

export default Details
