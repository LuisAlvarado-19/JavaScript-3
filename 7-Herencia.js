let empleado = {
    nombre: 'Luis',
    edad: 26,
    'talla camisa':'M',
    equipo: {
        SO:'Windows',
        marca:'Dell'
    },
    mostarDatos: function(){
        console.log(`Nombre: ${this.nombre} \r\n edad: ${this.edad}`)
    },
    cambiarNombre: function(nuevoNombre){
        let anterior = this.nombre;
        this.nombre = nuevoNombre;
        return anterior;
    }

};
let empleado1 = Object.create(empleado);
let empleado2 = Object.create(empleado);
empleado1.cambiarNombre('Katherine');
empleado1.edad = 25;
empleado2.cambiarNombre('Dania');
empleado2.edad = 26;

empleado.mostrarEdad = function () {
    console.log(this.edad);
}
empleado1.mostrarEdad();
empleado2.mostrarEdad();