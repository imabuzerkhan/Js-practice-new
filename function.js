function getSum(n){
  let sum = 0;
  for(let i=1; i<=n; i++){
    sum += i;
  }
  return sum;
}
console.log(getSum(10));


let str = ["Hello " , "abuzer " , "how are you"]

function concat (str){
  let result = ""
  for(let i =0; i<str.length; i++){
result += str[i];
  }
return result
}
console.log(concat(str));



let greet = "hello"

function firstFun(){
  let greet = "Namaste"
  console.log(greet);

  function SecondFun(){
    console.log(greet);
  }
  console.log(greet);
  SecondFun();
}
firstFun();