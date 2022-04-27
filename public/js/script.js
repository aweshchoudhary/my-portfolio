const rootElement = document.documentElement;

async function toggleTheme() {
  const themeMode = localStorage.getItem("themeMode");
  if (themeMode === "dark") {
    localStorage.setItem("themeMode", "light");
  } else {
    localStorage.setItem("themeMode", "dark");
  }
  changeTheme();
}
function changeTheme() {
  const themeMode = localStorage.getItem("themeMode");
  if (themeMode === "dark") {
    rootElement.classList.add("dark");
    rootElement.classList.remove("light");
  } else {
    rootElement.classList.remove("dark");
    rootElement.classList.add("light");
  }
}
changeTheme();
//sidebar
const sidebar = document.querySelector(".nav-links");
const blackScreen = document.querySelector(".black-screen");
const navbar = document.querySelector("#navbar");

function closeSidebar() {
  sidebar.style.transform = "translateX(-400px)";
  blackScreen.classList.add("close");
}
function openSidebar() {
  sidebar.style.transform = "translateX(0)";
  blackScreen.classList.remove("close");
}

window.onscroll = () => {
  if (window.scrollY === 0) {
    navbar.classList.remove("primary");
  } else {
    navbar.classList.add("primary");
  }
};
