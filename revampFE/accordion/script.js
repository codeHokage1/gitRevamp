const allItems = document.querySelectorAll(".acc-item");

allItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    })


})