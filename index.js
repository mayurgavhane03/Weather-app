// map => iterate over aray and perform a action
// filter => iterate over aray and filter out the element
//reduce => whatever value u have do some operation on available values and bring single value


// const numbers = [1, 2, 3, 4, 5, 6]
// const nums = numbers.map((val)=>val*5)


// const count =  ["india","Finland","Srilanka","ireland"];
// const countr = count.filter((val)=>val.includes())
// console.log(countr);

/* start wheather app */


//data
//variable to store the element
// function to get the data from wather app
// manipulate the variable of alreay created element

// let data;

const inputBox = document.getElementById("inputbox");
const countryName = document.getElementById("countryname");
const stateName = document.getElementById("statename");
const cityName = document.getElementById("cityename");
const Humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windspeed");
const Temp = document.getElementById("temperature");
const logoImage = document.getElementById("logoImage");

const getData = async (event) => {
    event.preventDefault();
    if (!inputBox.value) {
        alert("Please enter your location");
        return;
    }
    const city = inputBox.value;

    // Fetching data from the API
    const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=846c725113074473a8960341231608&q=${city}`);
    const orgData = await fetchData.json();
    let data = orgData;
    console.log(data);

    // sabko data dunga lag jao kam pe😂😂😂
    countryName.textContent = data.location.country;
    
    stateName.textContent = data.location.region;
    cityName.textContent = data.location.name;
    Humidity.textContent = data.current.humidity;
    windSpeed.textContent = data.current.wind_kph;
    Temp.textContent = data.current.temp_c;
    // Assuming you have a logo image URL in the data
    logoImage.src = data.current.condition.icon;
};

const form = document.getElementById("form");
form.addEventListener("submit", getData);
