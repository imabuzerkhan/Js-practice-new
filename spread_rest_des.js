// ** spread 
// !Spread operator, yaani "..." (three dots), humein arrays mein existing elements ko access karne aur ek naye array ko banane mein madad karta hai. Isse hum ek array ke elements ko dusre array mein shaamil kar sakte hain ya phir naye elements ko existing array mein add kar sakte hain.

let arr = [1,2,3,4,5,6]
let newArry = 5;
let newValue = [...arr , newArry]
console.log(newValue)


let obj = {name:"king"}
let newObj = {c:"d"}
let objValue = {...obj , ...newObj}
console.log(objValue)


// ** rest 
// ! "rest" operator, yaani "..." (three dots), ek aur JavaScript feature hai jo humein arrays aur functions mein madad karta hai. Rest operator ka istemal hum arrays mein remaining elements ko collect karne aur functions mein remaining arguments ko collect karne ke liye karte hain.

// const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(rest); // Output: [3, 4, 5]


// ** destructured
// !Array destructuring ek tarika hai jisse hum ek array ke elements ko alag-alag variables mein assign kar sakte hain. Yeh ek powerful feature hai jo JavaScript mein available hai aur code ko zyada readable aur concise banane mein madad karta hai.

let fruits = ["a" , "b", 'c', 'd'];

let [first , second , ...rest] = fruits;
console.log(first);
console.log(second);
console.log(rest);


a = 1
b= 2
c= 3
 
a=b;
b=c
c=a;
console.log(a,b,c)