window.onload = () => {
    const weather_bg={
        "winters":[
            "link1",
            "link2"
        ],
        "summers":[
            "link1",
            "link2"
        ]
    }
    let weather = {
        apikey: "6f09bd43d4e772ffc018af4f89a98fe8",
        fetchWeather: function (city) {
            fetch(
                "http://api.openweathermap.org/data/2.5/weather?q=" +
                    city +
                    "&units=metric&appid=" +
                    this.apikey
            )
                .then((Response) => Response.json())
                .then((data) => this.displayWeather(data));
                
        },
        displayWeather: function (data) {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            // console.log(data.wind.speed);
            const speed = data.wind.speed;
            console.log(name, icon, description, temp, humidity, speed);
            document.querySelector(".city").innerText = "weather in" + name;
            document.querySelector(".icon").src =
                "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            document.querySelector(".description").innerText = description;
            document.querySelector(".temp").innerText = parseInt(temp) + "°C";
            document.querySelector(".humidity").innerText =
                "Humidity: " + humidity + "%";

            document.querySelector(".wind").innerText =
                " wind speed: " + speed + "km/h";
        },
        search: function () {
            this.fetchWeather(document.querySelector(".search-bar").value);
        },
    };

    document
        .querySelector(".search-btn")
        .addEventListener("click", function (e) {
            console.log("work");
            weather.search();
        });
};

