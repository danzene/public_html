document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".anuncio-slider");
    let index = 0;
    const totalAnuncios = document.querySelectorAll(".anuncio").length;

    function mudarAnuncio() {
        // Move o slider para o próximo anúncio
        slider.style.transform = `translateX(-${index * 100}%)`;

        // Aguarda 3 segundos para exibir o anúncio centralizado
        setTimeout(() => {
            index = (index + 1) % totalAnuncios;
            mudarAnuncio();
        }, 3000); // Tempo que o anúncio fica parado antes de continuar
    }

      //Iniciar animação
    mudarAnuncio();
});



   // Initialize Swiper 

    var swiper = new Swiper(".slide-info", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    document.addEventListener("DOMContentLoaded", function () {
        const popup = document.getElementById("popup-overlay");
        const fecharX = document.getElementById("popup-close");
    
        // Exibir o popup
        popup.style.visibility = "visible";
        popup.style.opacity = "1";
    
        // Fechar ao clicar no "X"
        fecharX.addEventListener("click", () => {
            popup.style.opacity = "0";
            popup.style.visibility = "hidden";
        });
    
        // Fechar ao clicar na área de fundo
        popup.addEventListener("click", (e) => {
            if (!e.target.closest(".card")) {
                popup.style.opacity = "0";
                popup.style.visibility = "hidden";
            }
        });
    });
    