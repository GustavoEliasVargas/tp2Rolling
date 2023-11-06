document.write('<article>');
document.write('<h2>Ejercicio 10</h2>');
const filas = parseInt(prompt('Ingrese la cantidad de filas'));
const columnas = parseInt(prompt('Ingrese la cantidad de columnas'));
let cant=filas*columnas;
  document.write('<table><tbody>');
  for (let i=0;i<filas;i++){
    document.write('<tr>');
      for (let j=0;j<columnas;j++){
        document.write(`<td>${cant--}</td>` )
      }
    document.write('</tr>');
  }
  document.write('</tbody></table>');

document.write('</article>');