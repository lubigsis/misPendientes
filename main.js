//------------------------------------------------declaro variables-------------------------------------------------
const fecha = document.querySelector('#fechaJS');
const lista = document.querySelector('#listaJS');
const elemento = document.querySelector('#elemento');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#boton-enterJS');

//-----------------------------------------------------------------------creación de fecha actualizada 
const FECHA = new Date ()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{weekday: 'long', month: 'short', day:'numeric'});

//--------------------------------------------------------------------------funciones---------------

// funcion de agregar tarea 
function agregarTarea(tarea) {

    const elemento = `
                        <i class="far fa-circle co" data="realizado" id="0"></i>
                        <p class="text">${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id="0"></i> 
                      
                    `
    lista.insertAdjacentHTML("beforeend",elemento);

}

//-----------------------------------------------------------------botón-------------------------------
// crear un evento para escuchar el enter y para habilitar el boton 
botonEnter.addEventListener('click', ()=> {
    const tarea = input.value;
    if(tarea){
        agregarTarea(tarea);
    }
    input.value = '';

});

