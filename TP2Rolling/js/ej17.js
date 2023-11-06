document.write('<article>');
document.write('<h2>Ejercicio 17</h2>');

const texto = prompt('ingrese un caden  de texto');
for(i=0; i<texto.length;i++){
  if (texto[i]==='a' ||texto[i]==='e' ||texto[i]==='i' ||texto[i]==='o' ||texto[i]==='u'){
    document.write(`<h3>la primera vocal se encuntra en la posicion ${i+1}</h3>`);
    break;   
  }
}
document.write('</article>');