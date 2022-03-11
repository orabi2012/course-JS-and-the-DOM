const h = document.querySelector("h6.text-center");

let i = 0
h.addEventListener("click", function () {

 
  console.log("The heading was clicked!");
  i +=1 ;

  if(i <= 10){

    h.innerHTML = `you Clicked me  ${i} times` ;
  }else{

    h.innerHTML = `ارحم امي العيانة` ;
  }
  
  h.classList.add("text-center");
  h.style.color = "red";
  h.style.backgroundColor = "black";
  h.style.fontSize = "x-large";

  // window.close();
});
