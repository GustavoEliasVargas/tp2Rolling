document.write('<article>');
document.write('<h2>Ejercicio 12</h2>');

const texto = prompt('ingrese un texto');
let  nuevoTexto = "";
for (i=texto.length-1;i>=0;i--){
  nuevoTexto += texto[i];
  debugger

}
document.write(` la cadena de texto al reves sera : ${nuevoTexto}`);
document.write('</article>');