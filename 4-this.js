let empresa = {
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
empresa.mostarDatos();

// NOTA:
// Con la palabra reservada this se hace referencia a que hay un elemento de "x" nombre y se omite el nombre
//  del objeto ya no se utilizaria empresa.nombre, sino this.nombre.