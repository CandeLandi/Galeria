import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";
import { cargarAnteriorSiguiente } from "./cargarImagen";
import carousel from "./carousel";

const galeria = document.getElementById('galeria');
//Cuando hacemos click en la galeria queremos encontrar los botones
galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button');

    //con dataset podemos acceder a los atributos personalizados que aparezcan con data

    //---CERRAR GALERIA
    if (boton?.dataset?.accion === 'cerrar-galeria') {
        console.log('cerrar galeria')
        cerrarGaleria();
        /* document.body.style.overflow = ''; */
    }

    //CARROUSEL SLIDE CLICK
    if (e.target.dataset.id) {
        slideClick(e);
    }

    // ---SIGUIENTE IMAGEN
    if (boton?.dataset?.accion === 'siguiente-imagen') {
        cargarAnteriorSiguiente('siguiente');
    }

    // ---ANTERIOR IMAGEN
    if (boton?.dataset?.accion === 'anterior-imagen') {
        cargarAnteriorSiguiente('anterior');
    }

    // ---CAROUSEL ADELANTE
    if (boton?.dataset?.accion === 'siguiente-slide') {
        carousel('adelante');
    }

    // ---CAROUSEL ATRAS
    if (boton?.dataset?.accion === 'anterior-slide') {
        carousel('atras');
    }
});