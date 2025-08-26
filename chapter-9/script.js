// github project

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