// ! for each method
// * ye method ek call back return karta hai aur ye harek value ko print karta hai

let val = [1,2,3,4,5,6,7,8,9];

val.forEach((data , index)=>{
  console.log(data, index)
  // val.splice(6 )
})

console.log("another line")


let obj = [{
  name:"Danish",
  age: 20
},{
  name: "Abuzer khan" ,
  age: 24
}]

obj.forEach((student , index)=>{
console.log(student.age , index)
})


// ! map and filter method 

// ** ye bhi for each kii tarah hii magar ye ek naya array return karta hai bas 

let value = [2,4,6,7,8];
let value2 = value.map((el)=>{
return el * 2
})
console.log(value2);
console.log(value)

// ** filter method value ko filter karne me kaam aata hai 

let name1 = "mohaamad abuzer khan";
let vowel = name1.split('').filter((checked) => {
    return ((checked === "a") || (checked === "g"));
}).join('-'); // Join the array back into a string
console.log(vowel); // Output: "aaag"


// ! ever method 
// ** ye do value retun karta true ya false ye and operator se milta julata hai 
let num = [1,2,3,5]
let num2 = num.every((data)=>{
return data % 2 == 0
})
console.log(num2);


// ! practice question 
let minNum = [23,56,97,25,89];

let value3 = minNum.reduce((result , data)=>{
if(result<data){
  return result
}
else{
  return data;
}
})
console.log(value3)

