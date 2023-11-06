
document.write('<article>');
document.write('<h2>Ejercicio 4</h2>')
let continuar=true;
let total=0;
while(continuar){
 
  let valor= parseFloat( prompt("ingrese un numero"));  
  if (typeof(valor)==='number'){
    total+=valor;    
  }else{
    alert('No es un numero');
  }

  /* total+=!isNaN(valor)? valor: alert('No es un numero');  esto me da error porque el aleret me da un valor NaN*/

  console.log(total);
  continuar=confirm('desea continuar ingresando texto');


};
document.write(`<h3>la suma de los numero ingrasados es:  ${total}</h3>`);
document.write('</article>');