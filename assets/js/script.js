    const apiKey="e2362f6bc77acf1d1c7701181194ba85"
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

    const searchBox=document.querySelector(".search input")
    const searchBtn=document.querySelector(".search button")
    async function checkWeather(city){
        const response=await fetch(apiUrl+city+`&appid=${apiKey}`)
        if(response.status==404){
            document.querySelector(".error").style.display="block"
            document.querySelector(".weather").style.display="none"
            return 
        }
        
        var data=await response.json()
        
        document.querySelector(".weather").style.display="block"
        document.querySelector(".city").innerHTML=data.name
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C" 
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%"
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr"
        
        var weatherImage = data.weather[0].main.toLowerCase()

       const weatherIcon = document.querySelector(".weather-icon")
       
       weatherIcon.src=`images/${weatherImage}.png`
    //    console.log(weatherIcon.src) 
    }


    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value)
    })