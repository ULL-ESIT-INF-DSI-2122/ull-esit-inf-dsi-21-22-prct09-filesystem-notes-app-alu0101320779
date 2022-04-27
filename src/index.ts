import {watchFile} from 'fs';
import {spawn} from 'child_process';
import { argv } from 'process'
import {readFile} from 'fs';

/**
 * Lee el fichero introducido
 */
readFile(argv[1], (err) => {
  if (err) {
    console.log('There must be a problem with the file you are trying to read');
  }

  /**
   * Mira el fichero introducido mientras se esté ejecutando
   */
  watchFile(argv[2], (curr, prev) => {
     
    const ls = spawn(argv[3], [argv[4], argv[5], argv[2]]);

    //Controlamos posibles errores
  
    //Mostramos por pantalla el tamaño del archivo
    console.log(`File was ${prev.size} bytes before it was modified.`);
    console.log(`Now file is ${curr.size} bytes.\n`);

    //Mostramos la salida del comando ls -l -h
    ls.stdout.pipe(process.stdout);
    let lsOutput = '';
    ls.stdout.on('data', (piece) => lsOutput += piece);

    //Mostramos infromación sobre el fichero
    ls.on('close', () => {
      const lsOutputAsArray = lsOutput.split(/\s+/);
      console.log(`El fichero helloworld.txt tiene ${lsOutputAsArray[0]} permisos`);
      console.log(`Propietario del fichero helloworld.txt ${lsOutputAsArray[2]}`);
      console.log(`Número de enlaces al fichero helloworld.txt ${lsOutputAsArray[1]}\n`);
    });
  });
});
