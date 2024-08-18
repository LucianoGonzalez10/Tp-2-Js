// EJERCICIO 1 
let arregloNumeros = [4,4,8,15,8,1, -21, 2070, 7, 9, -2. -8];

function sumarAr(a = []){
    let total = 0;
    a.forEach(element => {
        if(typeof element === "number"){
            total += element;
        }
    });
    return total;
}

console.log(sumarAr(arregloNumeros));

// EJERCICIO 2
function calcularPromedio(a = []){
    let total = sumarAr(a);
    return total / a.length;
}

console.log(calcularPromedio(arregloNumeros));

// EJERCICIO 3
function buscarAltoBajo(a = []){
    let alto = a[0];
    let bajo = a [0];
    a.forEach(element => {
        if(typeof element === 'number'){
            if(alto < element){
                alto = element;
            }
            if(bajo > element){
                bajo = element;
            }
        }
    });
    console.log(`Numero mas alto: ${alto}`);
    console.log(`Numero mas bajo: ${bajo}`);
}

buscarAltoBajo(arregloNumeros);

// EJERCICIO 4
function buscarElemento(a = [], buscar){
    let i = 0;
    let posicion = -1;
    a.forEach(element => {
        if(element === buscar){
            posicion = i;
        }
        i++;
    });
    if(posicion === -1){
        posicion = "No se encontro.";
    }
    return posicion;
}

console.log("La posicion es: " + buscarElemento(arregloNumeros, 2070));

// EJERCICIO 5
function separarPares(a = []){
    let pares = [];
    let impares = [];
    a.forEach(element => {
        if(typeof element === 'number'){
            if(element % 2 === 0){
                pares.push(element);
            }
            else{
                impares.push(element);
            }
        }
    });
    console.log(pares);
    console.log(impares);
}

separarPares(arregloNumeros);

// EJERCICIO 6
function eliminarDup(a = []){
    let arregloNuevo = [];
    a.forEach(num => {
        let flag = 0;
        arregloNuevo.forEach(element => {
            if(num === element){
                flag = 1;
            }
        });
        if(flag === 0){
            arregloNuevo.push(num);
        }
    });
    return arregloNuevo;
}
console.log(eliminarDup(arregloNumeros));

// EJERCICIO 7
function ordenar(a = []){
    return a.sort((num1, num2) => num1 - num2);
}

console.log(ordenar(arregloNumeros));

// EJERCICIO 8
function eliminarValor(a = [], eliminar){
    return a.filter(item => item !== eliminar);
}
console.log(eliminarValor(arregloNumeros, 8));

// EJERCICIO 9
function combinarArr(a = [], b = []){
    let nuevo = a.concat(b);
    return eliminarDup(nuevo);
}

let arr1 = [1,2,3,4,5,6,18];
let arr2 = [4,5,6,21,2,7,2,3,4];
console.log(combinarArr(arr1, arr2));

// EJERCICIO 10
function producto(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
}
let p1 = new producto("Manzanas", 11);
let p2 = new producto("Naranjas", 5);
let p3 = new producto("Uva", 7);
let p4 = new producto("Kiwi", 8);
let p5 = new producto("Pera", 1);

let listaCompras = [p1, p2, p3, p4 , p5];
console.log(listaCompras);

// EJERCICIO 11
function contacto(nombre, telefono, correo){
    this.nombre = nombre;
    this.telefono = telefono;
    this.correo = correo;
}

let c1 = new contacto("Luciano", "2235486445", "lucho@gmail");
let c2 = new contacto("Lupo", "223574983", "lupo@gmail");
let c3 = new contacto("Abril", "11561736324", "abru@gmail");

let agenda = [c1, c2, c3];
console.log(agenda);

// EJERCICIO 12
function contarPalabras(parrafo, palabra){
    const palabras = parrafo.split(/\W+/);
    let contador = 0;
    palabras.forEach(a => {
        a = a.toLowerCase();
        palabra = palabra.toLowerCase();
        if(a === palabra){
            contador++;
        }
    });
    return contador;
}

let parrafo = "Hola soy Luciano, Hola Luciano, Hola como te llamas?";
let palabra = "soy";
console.log("La palabra aparece: " + contarPalabras(parrafo, palabra));

// EJERCICIO 13
function celular(nombre, marca){
    this.nombre = nombre;
    this.marca = marca;
}

let cel1 = new celular("S21", "Samsung");
let cel2 = new celular("S22", "Samsung");
let cel3 = new celular("14", "Iphone");
let cel4 = new celular("1100", "Nokia");
let cel5 = new celular("Phone 6", "Pocophone");
let cel6 = new celular("Edge 3", "Motorola");

let celulares = [cel1, cel6, cel5, cel4, cel3, cel2];

function ordenar(a = []){
    a.sort((a,b) => {
        if(a.marca < b.marca) return -1;
        if(a.marca > b.marca) return 1;
        return 0;
    });
    return a;
}
console.log(ordenar(celulares));

// EJERCICIO 14
function productos2 (nombre, cantidad, precio){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
}

let prod1 = new productos2("Placa de Video", 4, 200);
let prod2 = new productos2("Procesador", 2, 150);
let prod3 = new productos2("Mother", 20, 100);
let prod4 = new productos2("Gabinete", 27, 60);
let prod5 = new productos2("Memoria Ram", 11, 80);

let registro = [prod1, prod2, prod3, prod4, prod5];
console.log(registro);

// EJERCICIO 15
function carrito(){
    this.productos = [];

    this.agregarP = function(a){
        if(a instanceof productos2){
            this.productos.push(a);
        }
        else{
            console.log("No es un producto valido.");
        }
    }

    this.eliminarP = function(a){
       this.productos = this.productos.filter(item => item !== a);
    }

    this.calcularTot = function(){
        let total = 0;
        this.productos.forEach(element => {
            if(element instanceof productos2){
                total += element.precio;
            }
        });
        return total;
    }
}

let carro = new carrito();
carro.agregarP(prod1);
carro.agregarP(prod2);
carro.agregarP(prod3);
carro.eliminarP(prod2);
console.log(carro.calcularTot());

// EJERCICIO 16
function Tarea(nombre, fecha){
    this.nombre = nombre;
    this.fecha = fecha;
    this.completada = false;
    this.pendiente = true;

    this.detalles = function(){
        console.log(`Nombre: ${this.nombre} Fecha: ${this.fecha} Completada: ${this.completada} Pendiente: ${this.pendiente}`);
    }

    this.completar = function(){
        this.completada = true;
        this.pendiente = false;
    }
    this.marcarPendiente = function(){
        this.pendiente = true;
        this.completada = false;
    }
}

function gestionTareas(){
    this.tareas = [];

    this.agregar = function (a){
        this.tareas.push(a);
    }

    this.eliminar = function (eliminar){
        this.tareas = this.tareas.filter(b => b.nombre != eliminar);
    }

    this.mostrarTareas = function (){
        this.tareas.forEach(element => {
            if(element instanceof Tarea){
                element.detalles();
            }
        });
    }
}

let tarea1 = new Tarea("Ordenar", "17/08");
let tarea2 = new Tarea("Limpiar", "21/09");
let tarea3 = new Tarea("Masajear", "15/08");
let tarea4 = new Tarea("Barrer", "7/08");

let gestor = new gestionTareas();
gestor.agregar(tarea1);
gestor.agregar(tarea2);
gestor.agregar(tarea3);
gestor.agregar(tarea4);

gestor.mostrarTareas();
gestor.eliminar("Limpiar");
tarea1.completar();
tarea1.marcarPendiente();
gestor.mostrarTareas();