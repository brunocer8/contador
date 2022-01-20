function contar(){
    var res = window.document.getElementById('res')
    var txt1 = window.document.getElementById('txt1')
    var num1 = Number(txt1.value)
    var txt2 = window.document.getElementById('txt2')
    var num2 = Number(txt2.value)
    var txt3 = window.document.getElementById('txt3')
    var num3 = Number(txt3.value)

    res.innerHTML = ""
    
    if(num2 < num3){
        window.alert("[ERRO] O intervalo não pode ser maior do que o Final da contagem.")
    }
    else if(num1 > num2){
            window.alert("[ERRO] O Inicio da contagem não pode ser maior do que o Final da contagem.")
        }
    else{
        for(var cont = num1; cont <= num2; cont += num3){
            res.innerHTML += `${cont}-`
        }
    }

}
