let num = 20;

if(num%10 === 0){
  console.log("it is good vale")

}else{
  console.log("its not good value")
}
// ! question 2

// let fullname =prompt("enter your name");
// let age = prompt("enter your age");
// let print = `your name is ${fullname} and your age is ${age}`;

// alert(print);


// ! question 3
let number = 4;

switch(number){
  case 1:
    console.log("january, february, march");
    break;
    case 2:
      console.log("april , march, may");
      break;
      case 3:
        console.log("june , july , august");
        break;
        case 4 :
          console.log("september, october, november, december")
          break;
          default:
            console.log("enter right date atleast!")
}

// ! question 4 

let str = "aGood String";

if((str[0]=== "a") && ((str[0]=== "A") || (str.length>3))){
  console.log("it is golden string");
}else{
  console.log("it is not golden string")
}

// ! questio n 5

let A = 12;
let b = 23;
let c = 43;

if(A>b){
  console.log("A is the greatest number")
}
else if(b>c){
  console.log("b is grater number ")
}
else if(c>A){
  console.log("c is a grater no")
}