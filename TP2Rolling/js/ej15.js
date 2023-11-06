document.write('<article>');
document.write('<h2>Ejercicio 15</h2>');
const texto= prompt('ingrese un texto').toLocaleLowerCase();
let contador=0;
for(i=0;i<texto.length;i++){
  if (texto[i]==='a' ||texto[i]==='e' ||texto[i]==='i' ||texto[i]==='o' ||texto[i]==='u'){
    ++contador;
  }
}
document.write(`<h3>El numero de vocales es  ${contador}</h3>`);

document.write('</article>');