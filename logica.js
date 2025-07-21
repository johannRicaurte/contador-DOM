//Logica del incremento y descremento y reinicio del numero

let numero = 0;
const contador = document.getElementById("contador");
const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");
const btnReiniciar = document.getElementById("reiniciar");

btnIncrementar.addEventListener("click", function()
{
    numero++;
    cambiarColor(numero);
    contador.textContent = numero;

}
);

btnDecrementar.addEventListener("click", function()
{
      numero--;
      cambiarColor(numero);
      contador.textContent = numero;
}
);

btnReiniciar.addEventListener("click", function()
{
    numero = 0;
    contador.textContent = numero;
    contador.style.color = "black";
})

function cambiarColor(num)
{
    if (num > 10)
    {
        contador.style.color = "red";
    }
    else
    {
        contador.style.color = "black";
    }
}