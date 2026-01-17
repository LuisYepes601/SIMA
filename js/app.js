function ocultarIconoCorreo() {

    const correo = document.querySelector(".bi-envelope");

    if (!correo) return;

    const inpemail = document.querySelector(".inp-email");
    if (!inpemail) return;


    inpemail.addEventListener("input", () => {

        if (inpemail.value === "") {
            correo.style.display = "block";
        } else {
            correo.style.display = "none";
        }


    })
}

document.addEventListener("DOMContentLoaded", ocultarIconoCorreo);

function mostrarContraseña() {

    const password = document.querySelector("#password");
    if (!password) return;

    const btnSwowPassword = document.querySelector(".btn-password");

    if (!btnSwowPassword) return;


    btnSwowPassword.addEventListener("click", () => {

        btnSwowPassword.classList.toggle("active");

        if (btnSwowPassword.classList.contains("active")) {
            password.type = "text";
            btnSwowPassword.classList.add("bi-eye-slash-fill");
            btnSwowPassword.classList.remove("bi-eye");

        } else {
            password.type = "password";
            btnSwowPassword.classList.remove("bi-eye-slash-fill")
            btnSwowPassword.classList.add("bi-eye");
        }
    })



}

mostrarContraseña();

function ocultarSecurityPassword() {

    const candado = document.querySelector(".bi-lock");

    console.log(candado);


    if (!candado) return;

    const password = document.querySelector(".password");

    if (!password) return;

    password.addEventListener("input", () => {

        if (password.value === "") {
            candado.style.display = "block";
        } else {
            candado.style.display = "none";
        }

    })

}

document.addEventListener("DOMContentLoaded", ocultarSecurityPassword);