
function activarAside() {

    const burguer = document.querySelector(".burguer");

    if (!burguer) return;

    console.log(burguer);



    const aside = document.querySelector(".aside");

    if (!aside) return;

    burguer.addEventListener("click", () => {

        aside.classList.toggle("active");

        const icono = burguer.firstElementChild;


        if (aside.classList.contains("active")) {

            icono.className = "bi bi-x-circle-fill";
            icono.style.color = "red";
        } else {
            icono.className = "bi bi-list";
            icono.style.color = "black";
        }

    })

} activarAside();

function btnRutasActive() {


    const botones = document.querySelectorAll(".btn-rutas");

    if (!botones.length > 0) return;

    botones.forEach(btn => {

        const ariaSelecionada = btn.getAttribute("aria-selected");

        if (ariaSelecionada === "true") {
            btn.style.background = "gray";
            btn.style.borderLeft = "3px solid white";

        }


        btn.addEventListener("click", () => {

            botones.forEach(element => {
                element.setAttribute("aria-selected", "false")
                if (element.getAttribute("aria-selected") === "false") {
                    element.style.background = "transparent";
                    element.style.borderLeft = "3px solid transparent";

                }
            });

            btn.setAttribute("aria-selected", "true");

            if (btn.getAttribute("aria-selected") === "true") {
                btn.style.background = "gray";
                btn.style.borderLeft = "3px solid white";

            }
        })
    });

} btnRutasActive();


