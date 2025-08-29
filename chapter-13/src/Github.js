// rohit bhaiya basic

// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'

// function Github () {
  


//    // ******** use params -> object return karta hai -> jo bhi apan dynamic route pe likhe hai "/:....." yaha pe -> uski user ki detail return karega 
//    // const data = useParams()
   
//    // or -> object hai so destructor karke nikalo value jo value chahiye

//       const {name} = useParams()
   


//    const [Profile , setProfile] = useState(null)



//    // fetch data from github
//    async function fetchUser(){
//     const res = await fetch(`https://api.github.com/users/${name}`) // github api 
//     const data = await res.json() 
//     setProfile(data)    // state update kar diya 
//   }



//    useEffect(()=>{
//      fetchUser()
//    },[name])   // name change hone par refetch karega
  



//     return (
//     <>

//        <h1>Github profile:</h1>
//        {/* display user data */}

    
//     {/* Conditional Rendering add kiya (Profile ? (...) : (...))
//         Matlab agar Profile null hai → Loading... text show karo.
//         Agar data aa gaya → tabhi avatar_url aur login render karo.
//         Isse TypeError nahi aayega. */}


//         {Profile ? (   // agar Profile null hai to error avoid karne ke liye conditional rendering
//           <div>
//             <img src={Profile.avatar_url} alt="profile" width="150" />
//             <h2>{Profile.login}</h2>
//           </div>
//         ) : (
//           <p>Loading...</p>   // jab tak data aata hai tab tak loading show karega
//         )}
//     </>
//   )
// }

// export default Github






// custom hooks  day9 pe jao-> 

   







// chota sa project github 

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Github () {
  


   // ******** use params -> object return karta hai -> jo bhi apan dynamic route pe likhe hai "/:....." yaha pe -> uski user ki detail return karega 
   // const data = useParams()
   
   // or -> object hai so destructor karke nikalo value jo value chahiye

      const {name} = useParams()
   


   const [Profile , setProfile] = useState(null)
   const [search ,setSearch] = useState(name || "") // input ke liye state


   // fetch data from github
   async function fetchUser(user){
    const res = await fetch(`https://api.github.com/users/${user}`) // github api 
    const data = await res.json() 
    setProfile(data)    // state update kar diya 
  }



   useEffect(()=>{
    if(name)            // agar route me param mila to wahi fetch karo
      fetchUser(name)
   },[name])   // name change hone par refetch karega
  



    return (
    <>

    <div className="github-container">

       <h1 className="title">Github Profile Viewer:</h1>
       {/* display user data */}


     {/* additional functioality -. search bar to get user */}

         <div className='search-box'>
            <input type='text' placeholder='Enter Github username' value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={()=>fetchUser(search)}>Search</button>
         </div>

    {/* ---------------------------------- */}


    
    {/* Conditional Rendering add kiya (Profile ? (...) : (...))
        Matlab agar Profile null hai → Loading... text show karo.
        Agar data aa gaya → tabhi avatar_url aur login render karo.
        Isse TypeError nahi aayega. */}


        {Profile ? (   // agar Profile null hai to error avoid karne ke liye conditional rendering
          <div className='profile-card'>
            <img src={Profile.avatar_url} alt="profile" width="150" />
            <h2>{Profile.login}</h2>
            <p>{Profile.bio || "No bio available"}</p>
            <div className="profile-stats">
             <p>Followers: {Profile.followers}</p>
             <p>Following: {Profile.following}</p>
             <p>Repos: {Profile.public_repos}</p>
            </div>
             <a href={Profile.html_url} target="_blank" rel="noreferrer">Visit Profile</a>
          </div>
          
        ) : (
          <p className='loading'>Loading...</p>   // jab tak data aata hai tab tak loading show karega
        )}
  
   </div>
    </>
  )
}

export default Github
