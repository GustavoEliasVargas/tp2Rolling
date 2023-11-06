document.write('<article>');
document.write('<h2>Ejercicio 14</h2>');

const text = prompt('ingrese un texto');
let textModificado='';
for(i=0;i<text.length;i++){
  textModificado+=text[i]+'-';
}
document.write(`<h3>${textModificado.slice(0, -1)}</h3>`)
document.write('</article>');