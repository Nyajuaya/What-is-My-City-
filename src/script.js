let cityData; 

fetch("db.json")
  .then(response => response.json())
  .then(data => {
    cityData = data.cities; 
  });
console.log(cityData)

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === number) {
    displayMessage('Congratulations! You Got My City!! .');

    const selectedCity = cities.find(city => city.id === guess);
    if (selectedCity) {
      const cityName = selectedCity.cityName;
      document.querySelector('.number').textContent = cityName;
    }

    document.querySelector('body').style.backgroundColor = '#205c8d';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high!' : 'Too low');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});



const cities = [
  {
    id: 1,
    cityName: "Mombasa"
  },
  // Add more city data here
  {
    id: 2, 
    "cityName":"Nairobi"
   },
   {
    id: 3, 
    cityName:"Dar es salaam"
   },  
   {
    id: 4, 
    cityName:"Tokyo"
   },
   {
    id: 5, 
    cityName:"New York"
   },
   {
    id: 6, 
    cityName:"Japan"
   },
   {
    id: 7, 
    cityName:"Luanda"
   },
   {
    id: 8, 
    cityName:"Cape Town"
   },
   {
    id: 9, 
    cityName:"Maputo"
   },
   {
    id: 10, 
    cityName:"Dakar"
   },
   {
    id: 11, 
    cityName:"Cairo"
   },
   {
     id: 12, 
     cityName:"Kigali"
    },
    {
     id: 13, 
     cityName:"Kampala"
    },  
    {
     id: 14, 
     cityName:"Harare"
    },
    {
     id: 15, 
     cityName:"Lusaka"
    },
    {
     id: 16, 
     cityName:"Monrovia"
    },
    {
     id: 17, 
     cityName:"Freetown"
    },
    {
     id: 18, 
     cityName:"Tripoli"
    },
    {
     id: 19, 
     cityName:"Rabat"
    },
    {
     id: 20, 
     cityName:"Abuja"
    }
];

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1 ;    
    
    displayMessage('start guessing...');  
    document.querySelector('.score').textContent = score;  
    document.querySelector('.number').textContent = '!!!';   
    document.querySelector('.guess').value = '';         
    
    document.querySelector('body').style.backgroundColor = '#205c8d';   
    document.querySelector('.number').style .width = '15rem';

});









































































































































































