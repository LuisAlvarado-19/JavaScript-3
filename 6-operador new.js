function miObjeto(){
        this.nombre= 'Luis',
        this.edad= 26,
        this['talla camisa']='M',
        this.equipo= {
            SO:'Windows',
            marca:'Dell'
        };
    this.mostarDatos= function(){
        console.log(`Nombre: ${this.nombre} \r\n edad: ${this.edad}`)
    };
    this.cambiarNombre= function(nuevoNombre){
        let anterior = this.nombre;
        this.nombre = nuevoNombre;
        return anterior;
    }
};

let empleado1 = new miObjeto();
console.log(empleado1);