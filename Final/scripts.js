function loadDoc()
{
    const xhttp = new XMLHttpRequest();

    xhttp.onload=function(){
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET","https://api.open-meteo.com/v1/forecast?latitude=44.69&longitude=-73.12&current_weather=true",true)
    xhttp.send();
}

