/*session_start();
$consulta_rut_empresa_bdd="select rut_empresa from empresa where id='1' ";
$res_rut_empresa_bdd=consulta_pdo($consulta_rut_empresa_bdd,array());
$fila_rut_empresa_bdd==respuesta_array($res_rut_empresa_bdd);
$rut_empresa_bdd_sin_puntos=str_replace('.','',$fila_rut_empresa_bdd[0]);
$arreglo_empresa_bdd=explode('-', $rut_empresa_bdd_sin_puntos);
$rut_empresa_bdd=;
*/
const valores = ['juan xxx', 'pedro xxc', 'pedrito xv', 'pedrito xxx', 'pedrito xl', 'pedrito xlix'];

function deromanize(romans) {
    let totalValores = 0;
    let romanoAreglado = [];
    let NumerosArabes = [];
    let NumerosRomanos = [];


    totalValores = romans.length;
    let roman = '';
    let nombreRoman = ''
    let valoresRomanos = { I: 1, V: 5, X: 10, L: 50 };
    let i = 0;
    let arabic = 0;
    for (let j = 0; j < totalValores; j++) {

        NumerosRomanos = [];
        NumerosRomanos = romans[j].split(' ');
        roman = '';
        nombreRoman = ''
        nombreRoman = NumerosRomanos[0];

        roman = NumerosRomanos[1];

        roman = roman.toUpperCase();
        if (roman != null) {
            if (/IIII|XXXX|VV|LL|[^IVXL]|I[L]/.test(roman)) {
                NumerosArabes.push({
                    nombre: nombreRoman,
                    numero: -1,
                });
            } else {
                arabic = 0,
                    i = roman.length;
                while (i--) {
                    if (valoresRomanos[roman[i]] < valoresRomanos[roman[i + 1]]) {
                        arabic -= valoresRomanos[roman[i]];
                    } else {
                        arabic += valoresRomanos[roman[i]];
                    }
                }
                NumerosArabes.push({
                    nombre: nombreRoman,
                    numero: arabic,
                });

            }
        } else {
            NumerosArabes.push({
                nombre: nombreRoman,
                numero: 0,
            });
        }

    }
    NumerosArabes.sort((a, b) => b.numero - (a.numero));
    NumerosArabes.map((NumeroArabe) => {
        romanoAreglado.push(NumeroArabe.nombre + ' ' + NumeroArabe.numero);

    });
    return romanoAreglado;
}


console.log(deromanize(valores));