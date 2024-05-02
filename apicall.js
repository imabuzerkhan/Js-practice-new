// let url = "https://catfact.ninja/fact";

// // fetch(url).then((res)=>{
// //   console.log(res)
// // return res.json()

// // }).then((data)=>{
// //   console.log("cat fact one:" , data.fact)
// //   return fetch(url)
// // }).then((res2)=>{
// //   console.log(res2)
// //   return res2.json()
// // }).then((data2)=>{
// //   console.log("cat fat two" , data2.fact)
// // })


// //  async function getfact(){
// //   try{
// //     let url2 = await fetch(url);
// //     let data = await url2.json();
// //     console.log("one number",data.fact)


// //     let url23 = await fetch(url);
// //     let data1 = await url23.json();
// //     console.log("two number",data1.fact)
    
// //   }catch{
// //     console.log("catch the error")
// //   }
// // }



// // ! cat qoute genrator random
// let butn = document.getElementById("btn")
// let message = document.getElementById("Message")

// butn.addEventListener("click", getfact)

// // ! api call with axois 

// async function getfact(){
//   try{
//     let url1 = await axios.get(url);
//     message.innerHTML = url1.data.fact
//   }catch{
//     console.log("error")
//   }
// }


// let dogapi = "https://dog.ceo/api/breeds/image/random"

// let dogbtn = document.getElementById("button");

// dogbtn.addEventListener("click", img)

// async function img(){
// let dogimg = await getimg();
// let img1 = document.getElementById("img")
// img1.setAttribute("src" , dogimg);
// }
// // img();

// async function getimg(){
//   try{
//     let dogapi1 = await fetch(dogapi);
//     let res = await dogapi1.json();
//     return res.message
//   }catch{
//     console.log("error message")
//     return "not find the value"
//   }
// }

// // getimg();
// let accesskey = "yV2UfDq-KMOt_qFkBBj84wFYCRR1b8jIvjYnQryMC04"
let searchbox = document.getElementById("input");
let button = document.getElementById("btn");

let keyword = "";
let page = 1;

async function Randomsearch() {
    try {
        keyword = searchbox.value;
        let accessKey = "yV2UfDq-KMOt_qFkBBj84wFYCRR1b8jIvjYnQryMC04";
        let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
        let urldata = await fetch(url);
        let res = await urldata.json();
        console.log(res);
    } catch (error) {
        console.log("error message", error);
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    page = 1;
    Randomsearch();
});
