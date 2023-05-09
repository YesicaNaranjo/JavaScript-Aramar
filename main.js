/*          CARRITO DE COMPRAS
Estructura para un carrito de compras
Calcula el costo total de productos agregados a un carrito de compras, valor con costo por unidad y descuentos.*/

//Declaración de variables:
const greeting = alert("Bienvenido a tu tienda virtual, a continuación contabilizaremos tu carrito de compras.");
let totalValue = 0;
let productValue = 0;
let quantity = 0;
let price = 0;

//Declaración de arreglos, objetos y clases:
class Login{
    constructor(user, password){
        this.user = usuario; 
        this.password = password;
    }
}

class Client{
    constructor(name, lastname, age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
}
const juan = new Client ("Juan", "Laverde", 25);
console.log (juan);

const arrayProducts = [
    {
    nameVegetable:"tomatoes",
    quantitieVegetable: 0,
    priceVegetable: 120,
    },
    {
    nameVegetable:"onion",
    quantitieVegetable: 0,
    priceVegetable: 150,
    },
    {
    nameVegetable:"paprika",
    quantitieVegetable: 0,
    priceVegetable: 400,
    },
    {
    nameVegetable:"eggplant",
    quantitieVegetable: 0,
    priceVegetable: 250,
    },
]


//Declaración de arreglos:
const arrayVegetables = ["tomatoes", "onion", "paprika", "eggplant"];
const arrayQuantities = [];
const arrayPrice = [120, 150, 400, 250];

//Funcion que calcula el valor total de la compra

function purchaseValue(productValue){

//Con el método push el cliente adiciona las camtidades de los productos elegidos en su carrito.
    for (let i=0; i<arrayProducts.length; i++){
        console.log(arrayProducts[i]);
        arrayProducts.quantitieVegetable.push(prompt("Ingresa la cantidad de " + arrayProducts.nameVegetable[i] + " de tu compra:"));
    }
    console.log(arrayProducts);
}
purchaseValue();
console.log(arrayProducts);



/*
   for(let i=0; i<arrayVegetables.length; i++){
    var productValue =  arrayQuantities[i] * arrayPrice[i];
    totalValue = totalValue + productValue;
    }
    console.log("Total value " + totalValue);
    return totalValue ;
}    
let resultado = purchaseValue();
alert("El costo total de tu compra es de : $ " + resultado );
purchaseValue();

const thanks = alert("¡Gracias por tu compra!");
    //Funcion que calcula el valor total de la compra
    function purchaseValue(product,quantity){
        producto = parseInt(prompt("Ingrese el valor del producto que deseas comprar ($) :"));
        console.log(producto, typeof producto);
        while(producto <= 0){
            alert("Recuerda que el valor ingresado debe ser númerico y mayor a 0.");
            producto = parseInt(prompt("Ingrese el valor del producto que deseas comprar ($) :"));
       }
        cantidad = parseInt(prompt("Ingresa el número de unidades a comprar: "));
        //valorP = alert("El valor total a pagar de este producto es: $ " + producto * cantidad); 
        return  producto * cantidad ;
    }    
    let resultado = valorTotal();
    alert("El costo total del producto es : $ " + resultado );
    valorTotal();*/