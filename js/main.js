const toggler = document.querySelector(".toggler");
const HTML = document.querySelector("html");


getDataFromLocalStorage();
toggler.onclick = () => {
  toggler.classList.toggle("active");
  custmizeTheInterface();
};

function getDataFromLocalStorage() {
  let getTheme = localStorage.getItem("theme");
  if (getTheme === "dark") {
    HTML.dataset.theme = "dark";
    toggler.classList.add("active");
  }
}

function custmizeTheInterface() {
  if (HTML.dataset.theme === "dark") {
    HTML.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  } else {
    HTML.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  }
}