async function getweatherData(city) {
    const apiKey = `97ed3715aec7b27c926a719bcdf2922c`; // Remplacez par votre clé API OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            document.getElementById('temperature').innerText = `Température: ${temperature}°C`;
            document.getElementById('description').innerText = `Description: ${description}`;

            if (temperature >= 25) {
                document.body.style.backgroundColor = 'red';
            } else {
                document.body.style.backgroundColor = 'blue';
            }
        })
        .catch(() => {
            console.log('Nom de ville invalide, veuillez réessayer !');
        });
}

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('ville').value;
    getweatherData(city);
});




