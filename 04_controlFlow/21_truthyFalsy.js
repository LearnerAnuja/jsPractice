const userEmail  =[]
//  if (userEmail) {
//     console.log("got user email");
//  }
//  else {
//     console.log("dont have user email")
//  }
 //falsy values
 //false , 0 ,-0,BigInt  0n 
// if (userEmail.length === 0){
//     console.log("array is empty")
// }
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0){
//     console.log("object is empty")
// }

//nullish coalescing opeartor (??): null undefined
let val1;
// val1 =5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 100


console.log(val1)


const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80")