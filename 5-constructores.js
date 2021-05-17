let constructor = (nombreInicial, edadInicial) => {
    let objeto = {
        nombre: nombreInicial,
        edad: edadInicial,
        'talla camisa':'M',
        equipo:{
            SD: 'Windows',
            marca:'HP'
        },
        mostarDatos: function(){
            console.log(`Nombre: ${this.nombre} \r\n edad: ${this.edad}`)
        },
        cambiarNombre: function(nuevoNombre){
            let anterior = this.nombre;
            this.nombre = nuevoNombre;
            return anterior;
        }

    }
    return objeto;
}
let empleado1 = constructor('Luis', '26');
let empleado2 = constructor('Gabriela', '28');
let empleado3 = constructor('jennifer', '21');
// empleado1.mostarDatos();
// empleado2.mostarDatos();
empleado3.mostarDatos();
// empleado3.cambiarNombre('Dennisse');
empleado3.nombre='Anielka';
empleado3.mostarDatos();
