let fruits = ["mango", 'apple' , 'banana', "litchi" , "cherry"];
// fruits.unshift("pineapple")
// fruits.pop();
// for(let i=0; i<fruits.length; i++){
//   console.log(fruits[i])
// }


// ! backwards 
// for(let i=fruits.length-1; i>=0; i--){
//   console.log(fruits[i]);
// }

// ? for of loops
for(item of fruits){
  console.log(item
    )
}
// * for of loops in string
// for(char of "mohammadAbuzerKhan"){
//   console.log(char);
// }


// ! nested for of loops
let hero = [['superman' , 'batman', 'ironman'],["doctor", "nurse", "pilot"]];

for(heros of hero){
  console.log(heros)
  for(name of heros){
    console.log(name)
  }
}