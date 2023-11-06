document.write('<article>');
document.write('<h2>Ejercicio 11</h2>');
let edades=[];
let nombres=[];
for (let i=0;i<3;i++){
  let edad=parseInt(prompt('ingresar la edad de la persona'));
  let nombre=prompt('ingre el nombre de la persona');
  edades.push(edad);
  nombres.push(nombre);  
};

let index=edades.indexOf(Math.max(...edades));
document.write(`el mayor es : ${nombres[index]}`);


document.write('</article>');