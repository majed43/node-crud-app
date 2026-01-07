const toggleMode = document.getElementById("light-dark-toggle");
console.log("from light dark mode");
const root = document.documentElement;
toggleMode.addEventListener("click", () => {
    const current = root.getAttribute("data-bs-theme");
    if (current === "dark") {
        root.setAttribute("data-bs-theme", "light");
        toggleMode.classList.remove("bi-moon-fill");
        toggleMode.classList.add("bi-sun-fill")
    } else {
        root.setAttribute("data-bs-theme", "dark");
        toggleMode.classList.remove("bi-sun-fill");
        toggleMode.classList.add("bi-moon-fill")
    }
    localStorage.setItem("Mode",root.getAttribute("data-bs-theme"));
})
root.setAttribute("data-bs-theme",localStorage.getItem("Mode"));
const current = root.getAttribute("data-bs-theme");
 if (current === "dark") {
        root.setAttribute("data-bs-theme", "dark");
        toggleMode.classList.remove("bi-sun-fill");
        toggleMode.classList.add("bi-moon-fill");
    } else {
        root.setAttribute("data-bs-theme", "light");
        toggleMode.classList.remove("bi-moon-fill");
        toggleMode.classList.add("bi-sun-fill");
    }

