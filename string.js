// ** trim method

let msg = "          hello  "
console.log(msg);
console.log(msg.trim());


// ! strings are immutable. iska mtlb hum isme koi chiz change nhi kar sakte hai .  trim ek naya value create karta hai 


// ** toUpperCase() , toLowerCase();

let value = "channu"
console.log(value)
console.log(value.toUpperCase());


let name = "ABUZER KHAN "
console.log(name.toLowerCase());

// ** indexof()
let msg1 = "love you too much coding"

console.log(msg1.indexOf("you"))
console.log(msg1.indexOf("z"))
console.log(msg1.indexOf("g"))


// ** method chaninig

let word = '               like you     '
let chaninig = word.trim().toLocaleUpperCase();
console.log(chaninig); 


// ** slice method

let myNmae = "mohammad abuzer khan"
//? let MyValue = myNmae.slice(0 , 9)
let MyValue = myNmae.slice(-6 )
console.log(MyValue)


// ** replace method();

let coding = " voting "
let replace = coding.replace("voting" , "i love coding")
console.log(coding.repeat(6));  //!repeat method
console.log(replace);