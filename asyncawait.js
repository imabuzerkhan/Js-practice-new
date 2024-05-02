 let h1 = document.getElementById("h1");
 h1.addEventListener("mouseover" , function(){
  console.log("button should be implimentd")
 })


 function changeColor(color , delay){
 return new Promise((resolve , reject)=>{

  setTimeout(()=>{
// let random= Math.floor(Math.random()*10);
// if(random<5){
//   reject("error")
// }


    h1.style.color = color;
    resolve ("promise resolved sucess ")
  }, delay)

 })



 }

 changeColor()
 .then(()=>{
  console.log("this is a red color")
  return changeColor("red" , 1000)
.then(()=>{
  console.log("this is a green color")
  return changeColor("green" , 1000)
  .then(()=>{
    console.log("this is a pink color")
  return changeColor("pink" , 1000)
  })
})
 }).catch(()=>{
  console.log("finding some error")
 })

//  async function bgcolor(){
//  try{
//   await changeColor("red", 2000)
//   await changeColor("purple", 2000)
//   await changeColor("blue", 2000)
//   changeColor("green", 2000);
//  }
//  catch(err){
//   console.log("catch the error")
//  }


//   let newNum = Math.random()*10
//   console.log(newNum)

  

  
//  }

//  bgcolor();