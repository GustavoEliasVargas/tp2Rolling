const nota=parseInt(prompt('Ingrese la nota del alumno'));
document.write('<article>');
document.write('<h2>Ejercicio 2</h2>');

if (!isNaN(nota)){
  if (nota>= 0 && nota <= 2){
    alert('Muy deficiente');
  }else if (nota>= 3 && nota <= 4){
    alert('Isuficiente');
  }else if (nota>= 5 && nota <= 6){
    alert('Suficiente');
  }else if (nota==7){
    alert('Bien');
  }else if (nota>= 8 && nota <= 9){
    alert('Notable');
  }else if (nota==10){
    alert('Sobresaliente');
  }else{
    alert('numero erroneo');
  }
}else{
  alert('introduce un numero válido');  
}
document.write('</article>');