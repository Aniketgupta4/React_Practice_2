// github project 
// ********** custom hooks use -> ek file mai sab hai hooks wagera sab -> so jsx ke code ke alawa code isme na likhu seperate file bana ke likhu
// make file -> usefetch.js -> cutom hook hamara hook hm bana ry hai -> dynamic hook hai mera 
// body pe apply hoga ye cutom hook

import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import Body from "./component/Body";

function GithubProfile(){
   // header
   // body : 10 card show karega
   
    return(
        <>
          <Header></Header>
          
          <Body></Body>
          

        </>
    )
}



ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile></GithubProfile>)