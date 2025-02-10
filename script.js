
document.getElementById("calcular").addEventListener("click", () => {
   
    const numero = parseInt(document.getElementById("number").value);
    //capturar el contenedor donde se mostrará el resultado
    const resultado = document.getElementById("resultado");
    let factorial = 1;
 
    //evaluar el número ingresado
    if (isNaN(numero)) {
        alert("Por favor digite un número");
    }
    else if (numero < 0) {  
        alert("Por favor digite un número positivo");
    } 
    else{
        //calcular el factorial
        for (let i=1 ; i <= numero ; i++){
            factorial = factorial * i;
          }         
    }
    const calculoFinal = `<h2>Resultado</h2>
                          <label id="imprimir-resultado">El factorial de ${numero} es: ${factorial}</label>`;
    resultado.innerHTML = calculoFinal;
    document.getElementById("number").value = "";
    console.log("El factorial de "+ numero + " es : " + factorial);
});

 