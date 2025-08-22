// this is not good habit ki itna sara code in one file -> tough to read and understand 
// modules / compoenent -> ek function (js) bana do in a seperate file -> easy t0 read and understand -> bar bar use karo ek baar banao
// component / module -> ek folder banao and usme sab componenet banao -> not a rule -> easy to read and understand
// src file -> js files
// basically hmne har component ko alag alag mai rakha hai -> so ab unko import karna hoga -> so sabse pehle component wo file se export karo then import hoga wo
// .js extension hai usko vite jaise .jsx bhi likh shakte hai -> use .jsx jab jsx jyada use kare ho tab

import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./utils/dummy";

// import multiple export function -> by different way

import { op,ops } from "./utils/dummy";


// rename karo fucntion name ko -> rename convention

// import Header as head from "./component/Header";
// import { op as o,ops as s} from "./utils/dummy";



// in sabko components bana diye -> read and easy to understand

// function Card(props){
//     return(
//        <div className="card" style={{border:"2px solid black", padding:"2px"}}>
//          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsgeF8ggBGTyuRfzTZSpRP_ItVKBYzpKiGA&s" height="250px" width="200px"/>
//          <div style={{textAlign:"center"}}>
//             <h2>{props.cloth}</h2>
//             <h1>{props.offer}</h1>
//             <h2>Shop Now</h2>
//          </div>
//        </div>
//     )
// }

// function Header(){
//    return(
//       <div className="heading">
//          <img className="images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqOyS87deiv-mD2PC8rpUiE3IkRKM-Jk3P1g&s" height="80px" width="80px"/>
//          <div className="option">
//             <button className="but">Men</button>
//             <button className="but">Women</button>
//             <button className="but">Kids</button>
//             <button className="but">Home and Living</button>
//             <button className="but">Beauty</button>
//             <button className="but">Studio</button>
//          </div>
//          <input className="searchbar" placeholder="Search for Products Brands and More...."></input>
//          <div className="profile">
//             <button className="pro">Profile</button>
//             <button className="pro">Wishlist</button>
//             <button className="pro">Bag</button>
//          </div>
//       </div>
//    )
// }

// function Footer(){
//    return <img className="foot" src="https://www.gyftr.com/blog/wp-content/uploads/2019/04/banners21554285340.jpg" height="250px" width="1200px"/> 
// }


// by array



//utils folder -> is dummy data ko bhi ko kahi dal do and images wagera bhi rakho 
// const arr = [{cloth:"T-shirt",offer:"40-80%off"},{cloth:"shirt", offer:"60-80% off"},{cloth:"kurta", offer:"60-80% off"},{cloth:"pajama", offer:"50-80% off"},{cloth:"T-shirt",offer:"40-80%off"},{cloth:"shirt", offer:"60-80% off"},{cloth:"kurta", offer:"60-80% off"},{cloth:"pajama", offer:"50-80% off"}]



function App(){
return (
      <>
   
     {/* Header */}

       <Header />


     {/* Body */}

    {/* // use loop not use for loop because it not return anything whereas map return array -> and yahi data show hoga
    // jsx: array ke ander kuch bhi ayega samjh jeyaga except object -> so use {} this return array
    // sab element pass ek unique key ho -> optimized hota hai */}
    
     <div className="middle" style={{display:"flex" , flexWrap:"wrap", gap:"20px"}}>

        {
        arr.map((value,index)=><Card key={index} cloth={value.cloth} offer={value.offer}></Card>)
        }         

     </div>

       {/* // or

    //    <div style={{display:"flex" , flexWrap:"wrap", gap:"20px"}}>
    //      <Card cloth="T-shirt" offer="20-80% off"/> 
    //      <Card cloth="shirt" offer="40-80% off"/>
    //      <Card cloth="kurta" offer="60-80% off"/>
    //      <Card cloth="pajama" offer="50-80% off"/>
    //    </div> */}

    {/* // Footer */}

    <Footer />

    </>
)
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);