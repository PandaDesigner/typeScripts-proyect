//class

class Carro{
    marca:string;
    modelo?:string;
    functiona: boolean;

    constructor(marca:string, modelo:string, functiona:boolean  ){
        this.marca = marca;
        this.modelo = modelo;
        this.functiona = functiona; 
    }
}

let miCarrito = new Carro( 'Mazda', 'Civic', true )

console.log(miCarrito);

class Coche {
    public decirMarca(){
        console.log(this.mensaje() + this.marca);
    }

    private mensaje(){
        return `La marca es `
    }

    constructor( private marca:string, protected modelo:string, public functiona:boolean ){

    }
}

let tuCoche = new Coche( 'Mazda', 'Civic', true );

console.log(tuCoche.decirMarca());