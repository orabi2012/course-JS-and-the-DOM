const h = document.querySelector("h6.text-center");

let i = 0;
h.addEventListener("click", function () {
  h.classList.add("text-center");
  h.style.color = "blue";

  h.style.fontSize = "x-large";

  i += 1;
  console.log(`The heading was clicked! ${i}`);
  if (i <= 3) {
    h.innerHTML = `you Clicked me  ${i} times`;
    h.style.backgroundColor = "black";
  } else {
    h.innerHTML = `ارحم امي العيانة`;
    h.style.backgroundColor = "yellow";
  }

  // window.close();
});

const allElement = document.querySelector("#contain-all");

document.body.addEventListener("keypress", removeElement);

function removeElement() {
  if (allElement.firstElementChild != null) {
    console.log(`${allElement.firstElementChild.tagName} removed`);
    allElement.firstElementChild.remove();
  } else {
    console.log(`No Elements to be removed`);
    document.body.removeEventListener("keypress", removeElement);
  }
}
