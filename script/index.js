window.scrollTo(0, 0)

const root = document.querySelector(".root")
window.addEventListener("scroll", () => {
    setTimeout(() => {
        root.style.display = "block"
        root.classList.add("show")
    }, 500)
})