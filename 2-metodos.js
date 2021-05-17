let empleado = {
    nombre: 'Luis',
    edad: 26,
    'talla camisa':'M',
    equipo: {
        SO:'Windows',
        marca:'Dell'
    },
    mostarDatos: function(){
        console.log(`Nombre: ${empleado.nombre} \r\n edad: ${empleado.edad}`)
    },
    cambiarNombre: function(nuevoNombre){
        let anterior = empleado.nombre;
        empleado.nombre = nuevoNombre;
        return anterior;
    }
};
let anterior = empleado.cambiarNombre('David');
empleado.mostarDatos();
console.log(`El nombre anterior David era: ${anterior}`)