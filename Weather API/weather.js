
document.querySelector('button').addEventListener('click', makeWeather)


let api_key = "89475dfc4d245aaaee28bc1530fe5243"
function makeWeather(){
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`
    
    // (data.main.temp * (9 / 5) - 459.67).toFixed(1)

fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data)
        let temp = data.main.temp
        let humidity = data.main.humidity
        // let inputValue = data.date
        // let name = data.title
        document.querySelector('.temp').innerText = temp
        // document.querySelector('img').src = photos
        document.querySelector('.humid').innerText = humidity
     
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}