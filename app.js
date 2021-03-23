//const { require } = require("yargs");

//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log(argv);
        //console.log(argv.descripcion);
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('---por hacer-----'.green)
            console.log(tarea.descripcion)
            console.log('Estado: ', tarea.completado)
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.tarea);

        console.log(actualizar);


        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Tarea no reconocida');
}