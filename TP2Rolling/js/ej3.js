
document.write('<article>');
document.write('<h2>Ejercicio 3</h2>')
let continuar=true;
let texto='';
while(continuar){
  if(texto){
    texto+='-';
  }
  let dato= prompt("ingrese un texto");  
  texto+=dato? dato: texto.substring(0,texto.length-1);
  continuar=confirm('desea continuar ingresando texto');


};
document.write(`<h3>los datos ingrsados son:  ${texto}</h3>`);
document.write('</article>');