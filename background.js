let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  console.log("color generated");
  let h3 = document.querySelector("h3");
  let getRandomColor = randomColor();
  h3.innerText = getRandomColor;

  let div = document.querySelector(".container");
  div.style.backgroundColor = getRandomColor;
});

function randomColor(){
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
