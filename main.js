//Part 1 Dog 
let img = document.querySelector('img');
let dogButton = document.querySelector('button');

console.log(1)
fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response){
       // console.log(response.json());
       console.log(2)
       return response.json()
    })
    .then(function(data){
       // console.log(data);

        //console.log(data.message); // use this message url for the imagae 
       // console.log(data.status);
       console.log(3)

        img.src = data.message;
        //img.width = 400px
    })
    console.log(4)

    dogButton.addEventListener('click', () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(function(response){
           // console.log(response.json());
        
           return response.json()
        })
        .then(function(data){
           // console.log(data);
    
            //console.log(data.message); // use this message url for the imagae 
           // console.log(data.status);
        
            img.src = data.message;
        
        })
    })


//Part 2
let weatherForm = document.querySelector('#weatherForm');
let cityInput = document.querySelector('#cityInput');
let submitButton = document.querySelector('#submit');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let description = document.querySelector('#description');
let cityName = document.querySelector('#cityName');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(`Input: ${cityInput.value}`)
    cityName.innerHTML = cityInput.value;
     
    //https://goweather.herokuapp.com/weather/
    let url = `https://goweather.herokuapp.com/weather/${cityInput.value}`;
    console.log(encodeURI(url));
    fetch(encodeURI(url))
        .then(function(response){
            return response.json();
        })  
        .then(function(data){
           // console.log(data.forcast[0]);
            temp.innerHTML = data.temperature
            wind.innerHTML = data.wind
            description.innerHTML = data.description
            //console.log(data.forecast[0].temperature);

        })  
        cityInput.value = ""       
     })
