document.getElementById("btn1").addEventListener("click", function coordenadas() {
    var lat = document.getElementById("latitud").value;
    var long = document.getElementById("longitud").value;
    obtenerUbicacion(lat, long);


});
var datos;

function obtenerUbicacion(lat, long) {
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
                obtenerClima(datos.address.city);
            }
            demo.innerHTML += "<h3>" + datos.display_name + "</h3>" + "<br>";
        })


}

function obtenerCiudad(ciudad) {
    console.log(ciudad);

}


function obtenerClima(ciudad) {
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