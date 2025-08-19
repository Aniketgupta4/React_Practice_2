import React from "react";
import ReactDOM from "react-dom/client";


function Card(props){
    return(
       <div style={{border:"2px solid black", padding:"2px"}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsgeF8ggBGTyuRfzTZSpRP_ItVKBYzpKiGA&s" height="250px" width="200px"/>
         <div style={{textAlign:"center"}}>
            <h2>{props.cloth}</h2>
            <h1>{props.offer}</h1>
            <h2>Shop Now</h2>
         </div>
       </div>
    )
}


// by array

const arr = [{cloth:"T-shirt",offer:"40-80%off"},{cloth:"shirt", offer:"60-80% off"},{cloth:"kurta", offer:"60-80% off"},{cloth:"pajama", offer:"50-80% off"}]


function App(){
return (
    // Header
    // Body

    // use loop not use for loop because it not return anything whereas map return array -> and yahi data show hoga
    // jsx: array ke ander kuch bhi ayega samjh jeyaga except object -> so use {} this return array
    // sab element pass ek unique key ho -> optimized hota hai
    
     <div style={{display:"flex" , flexWrap:"wrap", gap:"20px"}}>

        {
        arr.map((value,index)=><Card key={index} cloth={value.cloth} offer={value.offer}></Card>)
        }         

     </div>

       // or

    //    <div style={{display:"flex" , flexWrap:"wrap", gap:"20px"}}>
    //      <Card cloth="T-shirt" offer="20-80% off"/> 
    //      <Card cloth="shirt" offer="40-80% off"/>
    //      <Card cloth="kurta" offer="60-80% off"/>
    //      <Card cloth="pajama" offer="50-80% off"/>
    //    </div>

    // Footer
)
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);