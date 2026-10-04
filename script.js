const btn = document.querySelector("#btn");
const img = document.querySelector("img");
const tx1 = document.querySelector("#tx1");
const tx2 = document.querySelector("#tx2");
const databox = document.querySelector(".data");
const them = document.querySelector(".mode");
const body = document.querySelector("body");
const box = document.querySelector(".data");
const h1 = document.querySelector("h1");

databox.style.display = "none";
btn.addEventListener("click", () => {
  async function fetchData() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    const user = data.results[0];

    img.setAttribute("src", user.picture.large);
    tx1.textContent = `${user.name.first} ${user.name.last}`;
    tx2.textContent = user.email;
    databox.style.display = "initial";
  }

  fetchData();
});

let mode = "dark";
them.addEventListener("click", () => {
  if (mode === "dark") {
    body.style.backgroundColor = "black";
    them.textContent = "dark";
    box.style.boxShadow = "0px 0px 15px white";
    h1.style.color = "white";

    mode = "light";
  } else if (mode === "light") {
    body.style.backgroundColor = "white";
    them.textContent = "light";
    box.style.boxShadow = "0px 0px 15px black";
    h1.style.color = "black";
    mode = "dark";
  }
});
