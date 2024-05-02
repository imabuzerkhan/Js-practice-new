// ! odd no in for loop
//* for(let odd=1; odd<=15; odd = odd+2){
// *  console.log(odd);
//* }

// ! print even no in for loop
//* for (let i=2; i<=15; i = i+2 ){
// *  console.log(i)

// *}
// ? backwards print even no
// *for (let i= 10; i>=2; i= i-2 ){
// *  console.log(i)
// *}

// ! multiplication table of 5
// for(let i = 5; i<=50; i= i+5){
//   console.log( i)
// }

// let table = parseInt(prompt("enter your number"))
// for (let i = table; i<=table*10; i= i+table  ){
//   console.log(i)
// }

// ! nested loops
// for(let i=6; i<=10; i++){
//   console.log("outer value" , i)
//   for(let k=1; k<=3; k++){
//     console.log(k)
//   }
// }

// // ! while loop
// let i = 1;
// while(i<=5){
//   console.log(i)
//   i++;
// }
// // ! while loop multiplication
// let j = 5;
// while(j<=50){
//   console.log(i)
//   j=j+5;
// }


// ! favourite movie 

let favouriteMovie = "Dhoom"
let guess = prompt("guess favourite movie")

while((guess!=favouriteMovie)&&(guess!='quit')){
  console.log("wrong")
  guess = prompt("guess again")
  console.log("wright guess")
}