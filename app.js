const h = document.querySelector("h6.text-center");

let i = 0;
h.addEventListener("click", function () {
  console.log("The heading was clicked!");

  h.classList.add("text-center");
  h.style.color = "blue";

  h.style.fontSize = "x-large";

  i += 1;

  if (i <= 3) {
    h.innerHTML = `you Clicked me  ${i} times`;
    h.style.backgroundColor = "black";
  } else {
    h.innerHTML = `ارحم امي العيانة`;
    h.style.backgroundColor = "yellow";
  }

  // window.close();
});
