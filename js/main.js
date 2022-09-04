//class
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, functiona) {
        this.marca = marca;
        this.modelo = modelo;
        this.functiona = functiona;
    }
    return Carro;
}());
var miCarrito = new Carro('Mazda', 'Civic', true);
console.log(miCarrito);

