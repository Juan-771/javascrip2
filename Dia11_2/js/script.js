//LA CUCARACHAAAAA
var x = document.getElementById("myAudio").autoplay;
document.getElementById('divizao').innerHTML = `<h1>Buscar Festividades</h1>`;

async function fetchHoliAXIOS(){
    let opcionesSolicitud ={
        method:"GET"
    }
    console.log("jijijiji");
    let anoAfuera = document.getElementById('anos').value;
    console.log(anoAfuera);
    let paisesAfuera = document.getElementById('paises').value;
    console.log(paisesAfuera);
    await fetch(`https://date.nager.at/api/v3/publicholidays/${anoAfuera}/${paisesAfuera}`,opcionesSolicitud)
    .then(response =>{
        if(!response.ok){
            console.log("Hubo error!");
        }else{
            return response.json();
        }
    })
    .then((edgar)=>{
        console.log(edgar);
        displayHoly(edgar);
    });
};
//Consumo de API
function fetchHoly() {
    let abril = new XMLHttpRequest();
    let anoAfuera = document.getElementById('anos').value;
    let paisesAfuera = document.getElementById('paises').value;
    let url = `https://date.nager.at/api/v3/publicholidays/${anoAfuera}/${paisesAfuera}`;
    console.log(url);
    abril.open('GET', url, true);
    abril.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta);
            displayHoly(respuesta);
        }
    }
    abril.send();

}

function displayHoly(datica) {
    
    let mostrarInfo = document.getElementById('daticosConsumidos');
    mostrarInfo.innerHTML=``;
    console.log(datica.length);
    for (let i = 0; i < datica.length; i++) {
        mostrarInfo.innerHTML = mostrarInfo.innerHTML + `<h2>La festividad # ${i} es ${datica[i]["localName"]} y es en esta fecha:${datica[i]["date"]}</h2>`
    }


}
let elementoBoton = document.getElementById('botonMandar');
elementoBoton.addEventListener("click", fetchHoliAXIOS);