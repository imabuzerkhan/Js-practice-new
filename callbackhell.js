function Savedata(data , sucess, failure){
  let internetSpeed = Math.floor(Math.random()*10)+1 ;
 if(internetSpeed > 6){
 sucess();
 }
 if(internetSpeed<4){
  failure();

 }
}
Savedata("abuzer" ,()=>{
console.log("your internet speed is high")
Savedata("mannu" , ()=>{
console.log("mannu : your spped is so high and high")
}, ()=>{
  console.log("mannu: your spped is low")
})
}, ()=>{
  console.log("your internet spped is so week")
})