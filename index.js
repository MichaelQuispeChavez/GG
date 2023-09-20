const miContador = (function(){
    let contador = 0 ;
    function incrementar(){
        console.log(++contador);
    }
    function decrementar(){
        console.log(--contador);
    }
    function valor(){
        console.log(contador);
    }

    return{
        incrementar,
        decrementar,
        valor
    }
})();

miContador.incrementar()
miContador.incrementar()
miContador.valor()
miContador.decrementar()
