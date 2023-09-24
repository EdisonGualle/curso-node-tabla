
const fs= require('fs');
const colors = require('colors');
 


const crearArchivo =async (base = 2, listar = false, hasta = 10) =>{

    try {
        let salida ='';
        let consola='';
        for (let index = 1; index <= hasta; index++) {
            consola+=`${base} ${'x'.yellow} ${index} ${'='.yellow} ${base * index }\n`.italic;
            salida+=`${base} x ${index} = ${base * index }\n`;


        }
        if(listar){
            console.log('=================='.gray);
            console.log('Tabla del:'.red.italic, base);
            console.log('=================='.gray);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`.rainbow;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}