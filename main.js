/* Profesor, el siguiente trabajo busca trabajar sobre dos arrays la primera hace referencia a los servicios ofrecidos  por una oficnia de arquitectura y la segunda son los proyectos propios de esa oficina*/

const servicios = function( nombre,precio,unidad){
    this.nombre = nombre
    this.precio = precio
    this.unidad = unidad
}
let servicio1= new servicios("diseño arquitectonico",50000,"metros cuadrados")
let servicio2= new servicios("levantamiento topografico",1000000,"hectárea")
let servicio3= new servicios("vuelo de drone",200000,"hectárea")
let servicio4= new servicios("diseño estructural",10500,"metros cuadrados")
let servicio5= new servicios("Renders",350000,"unidad")
let servicio6= new servicios("levantamiento arquitectonico",15000,"metros cuadrados")

const listaservicios = [servicio1, servicio2, servicio3, servicio4, servicio5, servicio6]

console.table (listaservicios)

alert ("Bienvenido al sistema de servicios y proyectos de Arteha Lab")

function filtrarServicios(){
    let BuscarServicio = prompt("ingresa el servicio que buscas").trim().toUpperCase()
    let ResultadoServicio = listaservicios.filter( (x)=> x.nombre.toUpperCase().includes(BuscarServicio) )
    if(ResultadoServicio.length >0){
        console.table(ResultadoServicio)
    }else{
        alert("no se encontraron coincidencias en la base")
    }
}

filtrarServicios ()



