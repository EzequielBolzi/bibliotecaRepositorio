
/* Propiedad FOREACH permite iterar conjunto de elementos
Recibo una funcion anonima, la cual recibie un parametro que es el boton puntual que se
 esta ejecutando en ese momento
Y por acada item que seria el boton, ejecuto el condicional IF.*/
let boton = document.querySelectorAll('button'); 

boton.forEach(function(item){
    item.addEventListener('click',
    function() {
      if (item.innerText == 'RESERVAR') 
      item.innerText = 'RESERVADO';
      else item.innerText = 'RESERVAR'; 
           
    });

});

