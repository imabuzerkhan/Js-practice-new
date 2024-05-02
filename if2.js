let popcornSize = 's'

if(popcornSize === 'xl'){
  console.log('the popcorn price is 250')
}
else if(popcornSize === 'l'){
  console.log('the large size of popcorn is 150')
}
else{
  ('please say which type of popcorn you need')
}


// ! nested level in if else

let mark = 24;

if(mark>=33){
  console.log("pass")

  if(mark >= 80){
    console.log("your grade is: A+")
  }
  else if(mark>= 70){
    console.log("your grade is: A")
  }
  else if(mark>=65){
    console.log("your grade is : B+")
  }
  else if(mark>=45){
    console.log("your grade is:B")
  }
  else{
    console.log("your grade is: C ")
  }
}
else{
  console.log('better luck next time dude!')
}


// ! another question 

let str = "armstrong" ;

if(str[0]=== "a" && str.length>=3){
  console.log("it is a good string dude!")
}
else{
  console.log("it is bad string")
}


let num = 15;

if((num%5===0)&&((num+1 === 15)||(num-1 === 14))){
  console.log("the vlue correct!")

}
else{
  console.log("this value is wrong")
}


//? switch statement 

let day = 2;

switch(day){
  case 1 :
  console.log("Sunday")
  break;
  case 2 :
    console.log("Monday")
    break;

    case 3 :
      console.log("Tuesday")
      break;
      case 4 :
        console.log("Wednesday")
        break;
        case 5 :
          console.log("Friday")
          break;
          case 6 :
            console.log("Saturday")
            break;
            
}








