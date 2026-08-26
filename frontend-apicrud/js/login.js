//variables globales del formulario de login
const d = document;
userInput = d.querySelector("#usuarioForm");
passInput = d.querySelector("#contraForm");
btnLogin = d.querySelector(".btnLogin");

//evento al boton del formulario
btnLogin.addEventListener("click", () => {
    alert("escribio :"+ userInput.value);
});
