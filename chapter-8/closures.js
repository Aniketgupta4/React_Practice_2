// closures -> closures give a function access to its outer scope -> closures is created every time a function is created

// functions memory allocate in heap and as a referece store honge 
// meet() is a closure -> ye function jisko access kar shakta hai uska uska reference store karke rakhta hai -> so future mai call kare function ko toh chala shake ye -> so sirf meet return ni hora hai jiska jiska reference hai wo sab return ho ray hai meet a 

function greet(){
   
    let a = 20
    let b = 40

    console.log(a)
    console.log(b)

    // closure function
    function meet(){
        console.log(a)
        console.log(b)
    }

   return meet

}

const num = greet()
console.log(num)
num() // reference store karke rakhta hai ye closure outer variables + self ka


// closure use karegai in project