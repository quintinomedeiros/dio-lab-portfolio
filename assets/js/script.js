// Mudar entre modo escuro e claro
const toggleTheme = document.getElementById("toggleTheme");
const toggleTheme2 = document.getElementById("toggleTheme2");

const rootHtml = document.documentElement;

function changeTheme() {
    // Tema atual
    const currentTheme = rootHtml.getAttribute("data-theme");

    // Alterar o Tema
    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    // Alternância entre as classes do botão
    toggleTheme.classList.toggle("bi-moon-stars-fill");
    toggleTheme.classList.toggle("bi-emoji-sunglasses-fill");
    toggleTheme2.classList.toggle("bi-moon-stars-fill");
    toggleTheme2.classList.toggle("bi-emoji-sunglasses-fill");
}

toggleTheme.addEventListener("click", changeTheme);
toggleTheme2.addEventListener("click", changeTheme);


