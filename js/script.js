//      Project Name: Weather app 
//      Description: This application display's weather details of a particular city when selected
//      language: HTMl,CSS,JS
//      Author: Shaik Mudassir
//      Github: https://github.com/shaik80
class Weatherdetails{
    
    showdaytime(){
        let now = new Date();
        let day = now.getDay();
        let dayword = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let session ="AM";
        
        if(h == 0){
            h = 12;
          }
          if(h > 12){
            h = h - 12;
            session = "PM";
          }
        let time = dayword[day]+"  "+h+":"+m+" "+session;
        document.getElementById("daytime").innerHTML = time;
    }
    getcelsius(degree){
      let imglink ="http://openweathermap.org/img/w/";
      let appid = "fa541811e28f223594a0e3a11717ffa4";
      let getcity = document.getElementById("getcity").value;
      let displaycity = document.getElementById("displaycity");
      let celsius = document.getElementById("celsius");
      let info = document.getElementById("info");
      let emoji = document.getElementById("emoji");
      let C =document.getElementById("C");
      let F =document.getElementById("F");
      let loglat =  document.getElementById("longlat")
      if (degree == 0){
          let a = fetch("https://api.openweathermap.org/data/2.5/weather?q="+getcity+"&appid="+appid)
          .then(v => {
            return console.log(v.json())
        })
        .then(v =>{
            console.log(imglink+v.weather[0].icon+".png")
            emoji.src = "http://openweathermap.org/img/w/"+v.weather[0].icon+".png";
            info.innerHTML = v.weather[0].main;
            displaycity.innerHTML = v.name+","+v.sys.country;
            celsius.innerHTML= Math.round(v.main.temp - 273.15);
            longlat.href = "https://www.google.co.in/maps/place/"+v.name+","+v.sys.country+"/@"+v.coord.lat+","+v.coord.lon
        })
    }
      else if(degree == 'C'){
        celsius.innerHTML = Math.round((celsius.innerHTML -32)  * 5 / 9);
        C.classList.add("active");
        F.classList.remove("active");
      }
      else if(degree == 'F'){
          celsius.innerHTML = Math.round((celsius.innerHTML * 9 / 5) + 32);
          F.classList.add("active");
          C.classList.remove("active");
      }
    }
}
C.classList.add("active");
F.classList.remove("active");
weather = new Weatherdetails();
setInterval(weather.showdaytime,1000)
