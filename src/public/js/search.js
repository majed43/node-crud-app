const searchBar = document.querySelector("#search-bar");
// console.log("from search");
searchBar.addEventListener("keyup", () => {
    const filter = searchBar.value.toLowerCase();
    const targets = document.querySelectorAll("tbody>tr");
    for (target of targets) {
        const tds = target.querySelectorAll("td");
        let found = false;
        for (let i = 0; i < 5; i++) {
            const td = tds[i];
            if (td.textContent.toLowerCase().includes(filter)) {
                found = true;
                break;
            };
        };
        target.style.display = found ? "" : "none";
    }
})