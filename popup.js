window.onload = function(){
    if(getCookie("popupWatched")){
        return;
    }
    mostrarPopup();
    
    
}

const botonCerrarPopupNacex = document.querySelector(".close_button_container_nacex button");


botonCerrarPopupNacex.addEventListener("click", function(e) {
    cerrarPopupNacex();
     // Set cookie to expire in 7 days
});

function mostrarPopup() {
    document.querySelector(".popup_container--nacex").style.display = "flex";
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function cerrarPopupNacex() {
    document.querySelector(".popup_container--nacex").style.display = "none";
}