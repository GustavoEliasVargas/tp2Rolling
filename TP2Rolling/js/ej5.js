document.write('<article>');
document.write('<h2>Ejercicio 5</h2>')
let continuar=true;
let letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

while(continuar){
 
  let dni= parseFloat( prompt("ingrese un DNI"));  
  if (typeof(dni)==='number' && (dni>=0 && dni<=99999999)){
    let i=dni % 23;
    if (i>=0 && i<=22){
      alert(`la letra correspodiente es ${letras[i]}`);      
    }else{
      alert('DNI no valido');
    }    
  }else{
    alert('No es un numero dni valido');
  }
  continuar=confirm('desea continuar ingresando otro DNI');
};

document.write('</article>');