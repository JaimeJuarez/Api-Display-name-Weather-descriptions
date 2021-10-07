// let request = new XMLHttpRequest();
// request.open('get', 'http://api.weatherstack.com/current?access_key=84f60ede00dbd97cfc102ba7010a4175&query=France');
// request.onload = function() {
//     let data = JSON.parse(this.response);
//     console.log(data);
//     let clima = document.getElementById("clima");
//     clima.innerHTML = `<p> El clima en la ciudad de ${data.location.name} el tipo de clima es : ${data.current.weather_descriptions}`
// }
// request.send();


// let request2 = new XMLHttpRequest();
// request2.open('get', 'https://us1.locationiq.com/v1/search.php?key=pk.44c67cf95f5617c911d14899e61836c7&q=Colima&format=json');
// request2.onload = function() {
//     let dataa = JSON.parse(this.response);
//     console.log(dataa);
//     let climaa = document.getElementById("climaa");
//     climaa.innerHTML = `<p> La ubicacion actual es:  ${dataa[1].display_name}`
// }
// request2.send();
document.getElementById("btn1").addEventListener("click", function coordenadas() {
    var lat = document.getElementById("latitud").value;
    var long = document.getElementById("longitud").value;
    pasar(lat, long);


});


var datos;

function pasar(lat, long) {
    console.log(lat);
    var url = 'https://us1.locationiq.com/v1/reverse.php?key=pk.44c67cf95f5617c911d14899e61836c7&lat=' + lat + '&lon=' + long + '&format=json'
    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            datos = data;
            if (datos.address.city != undefined) {
                pasar2(datos.address.city);
            }
            // for (let i = 0; i < data.length; i++) {
            demo.innerHTML += "<h3>" + datos.display_name + "</h3>" + "<br>";
            // }
        })
        // .then(function(ciudad) {
        //     ciudad = datos.address.city;
        //     // console.log(ciudad);
        // })

}

function obtenerCiudad(ciudad) {
    console.log(ciudad);

}


function pasar2(ciudad) {
    var data;
    console.log(ciudad);
    fetch('http://api.weatherstack.com/current?access_key=84f60ede00dbd97cfc102ba7010a4175&query=' + ciudad + '')
        .then(function(res) {
            return res.json();

        })
        .then(function(jsondata) {
            console.log(jsondata);
            data = jsondata;
            demo.innerHTML += "<h3>" + data.current.weather_descriptions + "</h3>" + "<br>";

        })
}