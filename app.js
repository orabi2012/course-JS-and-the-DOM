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

const links = document.querySelectorAll("a");
const thirdLink = links[20];
thirdLink.style.fontSize = "30px";
thirdLink.style.backgroundColor = "red";
thirdLink.style.Color = "red";

thirdLink.addEventListener("click", function (event) {
  // console.log(thirdLink.TEXT_NODE);

  event.preventDefault();
  console.log("Look, ma! We didn't navigate to a new page!");
});

const myCustomDiv = document.createElement("div");

function respondToTheClick(event) {
  if (event.target.nodeName === "P") {
    console.log(`A ${event.target.nodeName} was clicked. ${event.target.textContent}`);
  }else{

    console.log(`A ${event.target.nodeName} was clicked. `);
  }
}

for (let i = 1; i <= 100; i++) {
  const newElement = document.createElement("p");
  newElement.style.border = "thin solid #000000";
  newElement.style.backgroundColor = "red";
  newElement.textContent = "This is paragraph number " + i + "\n";

  myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener("click", respondToTheClick);

myCustomDiv.style.border = "thick solid #0000FF";
document.body.appendChild(myCustomDiv);
