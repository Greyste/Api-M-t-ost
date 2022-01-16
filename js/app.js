const APIKEY = `8524fa1abd14fc5f685d4ce82c6d7ccc`;

/*Appel à l'API openWeather avec ville en parametre de fonction*/
let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector("#city").innerHTML = " " + data.name;
        document.querySelector("#temp").innerHTML = " " + data.main.temp + "°";
        document.querySelector("#humidity").innerHTML =
          " " + data.main.humidity + "%";
        document.querySelector("#wind").innerHTML =
          " " + data.wind.speed + "km/h";
      })
    )
    .catch((err) => console.log("Erreur : " + err));
};

//Ecouteur d'événement sur la soumission du formulaire
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#inputCity").value;

  apiCall(ville);
});

//Appel par défaut au chargement de la page

apiCall("Roscoff");
