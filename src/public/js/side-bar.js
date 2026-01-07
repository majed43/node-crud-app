const sideBarToggler = document.getElementById("side-bar-toggler");
const sideBar = document.getElementById("side-bar");
sideBarToggler.addEventListener("click", () => {
    const isOpened = sideBar.classList.contains("opened");
    if (isOpened) {
        sideBar.classList.remove("opened");
        sideBar.classList.add("closed");
        sideBarToggler.classList.remove("bi-layout-sidebar");
        sideBarToggler.classList.add("bi-layout-sidebar-inset");
    } else {
        sideBar.classList.remove("closed");
        sideBar.classList.add("opened");
        sideBarToggler.classList.remove("bi-layout-sidebar-inset");
        sideBarToggler.classList.add("bi-layout-sidebar");
    }
});
const closeBtn = document.getElementById("side-bar-close-btn");
closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("opened");
    sideBar.classList.add("closed");
    sideBarToggler.classList.remove("bi-layout-sidebar");
    sideBarToggler.classList.add("bi-layout-sidebar-inset");
});
