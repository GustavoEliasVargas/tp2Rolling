document.write('<article>');
document.write('<h2>Ejercicio 8</h2>');
let line=1;
for(let i=1;i<=500;i++){
  
  document.write(`${i}`);
  if (i%4 ===0){
    document.write('(Multiplo de 4)');
  }else if(i%9 === 0){
    document.write('(Multiplo de 9)');
  }
  document.write('<br>');
  if (line++ === 5){
    document.write('------------<br>');
    line=1
  }

}
document.write('</article>');