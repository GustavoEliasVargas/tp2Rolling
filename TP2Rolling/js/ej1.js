let edad= parseInt(prompt("ingrese la edad del solicitante"));
document.write('<article>');
document.write('<h2>Ejercicio 1</h2>')
if (edad>=18){
  document.write('<h3>Ya puede conducir</h3>')
}else{
  document.write('<h3>la edad ingresada no es un numero valido para manejar</h3>')
}
ducument.write('</article>');