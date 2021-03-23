const acion1 = "push 5";
const accion2 = "pop";
const accion3 = "av 2 5";
const areglo = [];

function acciones(areglo, accion) {
    let contarAreglo = 0;
    let clonArreglo = [];
    contarAreglo = areglo.length;

    let aregloAccion = '';
    aregloAccion = accion.split(" ");
    let suma_pricipal = 0;
    let suma_final = 0;
    let paso = false;
    switch (aregloAccion[0].toUpperCase()) {
        case 'PUSH':
            areglo.splice(1, 0, aregloAccion[1]);
            //return areglo}
            paso = true;
            break;
        case 'POP':
            if (contarAreglo > 0) {
                areglo.splice(0, 1);
                paso = true;
                // return areglo;
            } else {
                return 'Areglo sin valores';
            }
            break;
        case 'AV':
            if (contarAreglo > 0) {
                suma_pricipal = parseInt(aregloAccion[1], 10) + parseInt(areglo[0], 10);
                suma_final = parseInt(aregloAccion[2], 10) + parseInt(areglo[contarAreglo - 1], 10);
                areglo.splice(0, 1, suma_pricipal);
                areglo.splice(contarAreglo - 1, 1, suma_final);
                paso = true;
                // return areglo;
            } else {
                return 'Areglo sin valores';
            }
            break;

    }
    if (paso) {
        if (areglo.length > 0) {
            return areglo;
        } else {

            clonArreglo.splice(0, 1, 'Empty');
            return clonArreglo;
        }

    }


}

console.log(acciones(areglo, acion1));
console.log(acciones(areglo, acion1));
console.log(acciones(areglo, acion1));
console.log(acciones(areglo, acion1));
console.log(acciones(areglo, acion1));
console.log(acciones(areglo, acion1));
console.log(acciones(areglo, accion3));
console.log(acciones(areglo, accion3));
console.log(acciones(areglo, accion2));
console.log(acciones(areglo, accion2));
console.log(acciones(areglo, accion2));
console.log(acciones(areglo, accion2));
console.log(acciones(areglo, accion2));
console.log(acciones(areglo, accion2));
console.log(acciones(areglo, accion2));
console.log(acciones(areglo, accion2));