var div = document.getElementById("resp");

function conversor_de_temperatura(){
    let celsius = parseFloat(document.getElementById("celsius").value); 

    if(isNaN(celsius)){
        return alert("Por favor digite um número válido!")
    }

    let fahrenheit = ((celsius * 1.8) + 32);   
    let kelvin = celsius + 273.15;
  
    div.innerHTML = `Temperatura em celsius: ${celsius}<br> Temperatura em fahrenheit: ${fahrenheit}<br> Temperatura em kelvin: ${kelvin}`;    
}
