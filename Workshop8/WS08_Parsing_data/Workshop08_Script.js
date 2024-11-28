// EXCERCISE 1

var jsonDataDiv = document.getElementById("jsondata");

var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

function displayNamesOnly(){
    var names = JSON.parse(text);
    var ulList = document.createElement("ul");

    names.employees.forEach(function(employee){
        var listElement = document.createElement("li")
        listElement.textContent = employee.firstName + " " + employee.lastName;
        ulList.appendChild(listElement);
        
    });

    jsonDataDiv.appendChild(ulList);
}


function displayAllData(){
    var data = JSON.parse(text);
    var ulList = document.createElement("ul");

    data.employees.forEach(function(employee){
        var listElement = document.createElement("li");
        var employeeData = "";

        for (var key in employee) {
            if (employee.hasOwnProperty(key)){
                employeeData += key + ": " + employee[key] + ", ";
            }
        }

        employeeData = employeeData.slice(0, -2);

        listElement.textContent = employeeData;
        ulList.appendChild(listElement);
    });

    jsonDataDiv.appendChild(ulList);
}


// EXCERCISE 2

function loadRawData(){
    fetch("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
        .then(response => {
            if (!response.ok) {
                throw new Error("womp womp, FAILURE!!");
            }
                return response.json();
            })
        .then(data => { //tässä kohdin laitetaaan JSON stringiksi
                var rawDataDiv = document.getElementById("rawdata");
                rawDataDiv.textContent = JSON.stringify(data);
            })
            .catch(error => {
                document.getElementById("rawdata").textContent = "Virhetapaus " + error.message;
            });
}

function loadAndParse(){
    fetch("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
        .then(response =>{
            if (!response.ok){
                throw new Error("womp womp, FAILURE!!");
            }
            return response.json();
        })
        .then(data =>{
            // jos vastaus on kunnossa
            if (data.Response === "True" && data.Search){
                var rawDataDiv = document.getElementById("rawdata");

                var table = document.createElement("table");
                table.style.width = "100%";
                table.style.margin = "20px 0";

                var headerRow = document.createElement("tr");
                headerRow.innerHTML = 
                `<th style="border: 2px solid black; padding: 5px;">Poster</th>
                <th style="border: 2px solid black; padding: 5px;">Title</th>
                <th style="border: 2px solid black; padding: 5px;">Year</th>
                <th style="border: 2px solid black; padding: 5px;">Media type</th>`;
                table.appendChild(headerRow);

                data.Search.forEach(result => {
                    var row = document.createElement("tr");
                    row.style.border = "2px solid black";

                    var posterCell = document.createElement("td");
                    posterCell.style.border = "1px solid black";
                    posterCell.style.padding = "8px";
                    posterCell.style.textAlign = "center";
                    var poster = document.createElement("img");
                    poster.src = result.Poster !== "N/A" ? result.Poster : "https://via.placeholder.com/50x75?text=No+Image";
                    poster.alt = `${result.Title} Poster`;
                    poster.style.width = "50px";
                    poster.style.height = "75px";
                    posterCell.appendChild(poster);

                    var titleCell = document.createElement("td");
                    titleCell.style.border = "1px solid black";
                    titleCell.style.padding = "8px";
                    titleCell.textContent = result.Title;

                    var yearCell = document.createElement("td");
                    yearCell.style.border = "1px solid black";
                    yearCell.style.padding = "8px";
                    yearCell.textContent = result.Year;

                    var typeCell = document.createElement("td");
                    typeCell.style.border = "1px solid black";
                    typeCell.style.padding = "8px";
                    typeCell.textContent = result.Type;

                    row.appendChild(posterCell);
                    row.appendChild(titleCell);
                    row.appendChild(yearCell);
                    row.appendChild(typeCell);

                    table.appendChild(row);
                });

                rawDataDiv.appendChild(table);
            } else {
                document.getElementById("rawdata").textContent = "No results found.";
            }
        })
        .catch(error => {
            document.getElementById("rawdata").textContent = "Virhetapaus: " + error.message;
        });
}

// EXCERCISE 3
// Weather App!!

async function getWeatherData(city = null){
    if (!city) {
        const citySelect = document.getElementById("city");
        city = citySelect.value;
    }

    const apiKey = "53e55bc80c2dad9df3891c0534bcc129";
    const owUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(owUrl);

        if (!response.ok){
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const weatherDataDiv = document.getElementById("weatherdata");
        const weatherInfo = 
        `<h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${(data.main.temp - 273.15).toFixed(1)}°C</p>
        <p><strong>Cloudiness:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>`;
        
        weatherDataDiv.innerHTML = weatherInfo;

    } catch (error){
        console.error("Failed to fetch weather data:", error);

        const weatherDataDiv = document.getElementById("weatherdata");
        weatherDataDiv.innerHTML = `<p class="error">Failed to fetch weather data: ${error.message}</p>`;
    }
}

// search-event listener
document.getElementById("search").addEventListener("click", () => {
    const citySearchInput = document.getElementById("citysearch").value;
    if (citySearchInput) {
        getWeatherData(citySearchInput); // Fetch weather for the input city
    }
});

// dfault-data
getWeatherData();

