let Carrito = [];
Principal();

function Principal(){
    let ruptura = true;
    while(ruptura){
    let menu = Menu();
        switch(menu){
            case 1:
                agregarCamisa();
                break; 
            case 2:
                agregarPantalo();
                break;
            case 3:
                agregarZapatos();
                break;
            case 4:
                agregarSombrero();
                break;
            case 5:
                total();
                break;
            case 6:
                ruptura= false;
                break;
            default: 
                alert("Ingresa un numero valido");
        }
    }
}

function Menu(){
    return parseInt(prompt(`
        Seleccione una opcion para agregar a su carrito 
    1-. Camisa   $300
    2-. Pantalon $500
    3-. Zapatos  $800
    4-. Sombrero $200
    5-. Ver carrito y total
    6-. Salir`));
}

function agregarCamisa(){
    let Camisa = "Camisa";
    let Acamisa={
        nombre: Camisa,
        costo: 300
    };
    Carrito.push(Acamisa);
    alert("Se agrego la camisa");
}

function agregarPantalo(){
     let Pantalon = "Pantalon";
     let Acamisa={
        nombre:Pantalon,
        costo: 500
     };
     Carrito.push(Acamisa);
     alert("Se agrego el pantalon");
}

function agregarZapatos(){
    let Camisa = "Zapatos";
    let Acamisa={
        nombre: Camisa,
        costo: 800
    };
    Carrito.push(Acamisa);
    alert("Se agregoron los zapatos");
}

function agregarSombrero(){
    let Camisa = "Sombrero";
    let Acamisa={
        nombre: Camisa,
        costo: 200
    };
    Carrito.push(Acamisa);
    alert("Se agrego el sombrero");
}

function total(){
    if(Carrito.length === 0){
        alert("No tienes nada en carrito");
    } else {
        let Mensaje = "Lista de compras y precios\n";
        let Costo = 0;
        Carrito.forEach((carritos, index)=>{
            Mensaje += (`${index+1}-. ${carritos.nombre} $${carritos.costo} \n `);
            Costo += parseInt(carritos.costo);
        }); //Index lista el arreglo
        alert(`${Mensaje}\n El costo total es de $${Costo}`);
    }
}



