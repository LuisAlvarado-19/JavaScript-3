let triangulo = {
    base: 0,
    altura:0,

    inicializar: function (b, a){
        triangulo.base = b,
        triangulo.altura = a
    },
    
    mostrarDatos: function (){
        console.log(`El valor de la base es igual a: ${triangulo.base} \r\n y el de la altura es: ${triangulo.altura}`);
    },
    
    area: function() {
        // formula area = (b * a)/2
        let area = (triangulo.base * triangulo.altura) / 2;
        return area;
    },
    hipotenusa: function(){
        // c = raiz (a^2 + b^2 )
        let hipotenusa = Math.sqrt(triangulo.altura ** 2 + triangulo.base ** 2);
        return hipotenusa;

    },
    perimetro: function(){
        let perimetro = triangulo.base + triangulo.altura + triangulo.hipotenusa();
        return perimetro;
    }

}
triangulo.inicializar(50, 70);
triangulo.mostrarDatos();

let areaTriangulo = triangulo.area();
console.log(`La area es: ${areaTriangulo}`)
console.log(`La hiponetusa es: ${triangulo.hipotenusa()}`);
console.log(`El perimetro es: ${triangulo.perimetro()}`);

