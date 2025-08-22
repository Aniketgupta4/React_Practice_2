const arr = [{cloth:"T-shirt",offer:"40-80%off"},{cloth:"shirt", offer:"60-80% off"},{cloth:"kurta", offer:"60-80% off"},{cloth:"pajama", offer:"50-80% off"},{cloth:"T-shirt",offer:"40-80%off"},{cloth:"shirt", offer:"60-80% off"},{cloth:"kurta", offer:"60-80% off"},{cloth:"pajama", offer:"50-80% off"}]
export default arr

// this is rule -> export default const arr ni likh shakte 
// ek file mai ek hi export default hoga 
// function ke aage kar shakte hai export in multiple function -> and import bhi alag way se karegai
// import { op,ops } from "./utils/dummy";
// normal export kare hai not use default

export function op(){
    return <h1>op</h1>
}

export function ops(){
    return <h1>ops</h1>
}