import React from "react";
import ReactDOM, { createRoot } from "react-dom/client"

// sirf devdependecnies ke download karna hai so -> npm i -D parcel kardo

const elem1 = <h1>Hello</h1>

// JSX : jsx ke ander js ka satatment ni likh shakte ex {let x = 5} ni likh shakte -> only expressions likh shakte hai ex obj.name , string , array likh shakte hai 
// statement -> no result and expressions -> result return karta hai so use hoga {}

let obj = { // object
    age : 25,
    salary : 234545
}

let arr = [1,2,3,4,5,6,7,8] // array

function greet(name){  
    return <h1>RAM RAM {name} - {obj.age} - {arr} </h1>
}

// function call by mutiple way
//const elem2 = greet();

const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(elem1)
//root.render(elem2)
root.render(greet("aniket")) // argumnet send karray hai 




// JSX : jsx format to write function -> function ka first letter capital beacuse bohot sare html tags are there so how ye samjhega user define hai ya html tag hai -> so first letter capital of jsx function

// props -> as a object lega 

function Namaste(props){ // argument ko accept karegai in form of props
    return <h1 className="first" id="second">Namaste , {props.name} - {props.age}</h1> // direct access ni kar shakte -> access by props.name karke
}

const elem4 = <Namaste name="Aniket" age="24"/> // function call and argument pass kare bohot sare
root.render(elem4)