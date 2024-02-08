const show = document.querySelector(".show");
const close = document.querySelector(".close");
const sideBar = document.querySelector(".SideBar");
const overlay = document.getElementById("overlay");

show.onclick = function() {
    sideBar.classList.remove("closeSideBar");
    overlay.style.display = "block"; 
};

close.onclick = function() {
    sideBar.classList.add("closeSideBar");
    overlay.style.display = "none"; 
};
