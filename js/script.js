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
        let time = dayword[day]+"  "+h+":"+m+": "+s+" "+session;
        document.getElementById("daytime").innerHTML = time;
    }
    
    getcelsius(degree){
      let x;
      let getcity = document.getElementById("getcity").value;
      let displaycity = document.getElementById("displaycity");
      let celsius = document.getElementById("celsius");
      let info = document.getElementById("info");
      let emoji = document.getElementById("emoji");
      let C =document.getElementById("C");
      let F =document.getElementById("F");  
      if (degree == 0){
        let val =[
            {city:"Bengaluru,Karnataka",celsius:"21",info:"partly Clould",img:"⛅"},
            {city:"Hydrabad,Andhra Pradesh",celsius:"22",info:"partly Clould",img:"⛅"},
            {city:"Chennai,Tamil Nadu",celsius:"32",info:"Sunny",img:"☀️"},
            {city:"Mumbai,Maharashtra",celsius:"27",info:"Rain",img:"🌧️"}
          ];
          val.filter(v => (v.city.includes(getcity)))
             .map(v=> {
                    displaycity.innerHTML = v.city,
                    celsius.innerHTML = v.celsius,
                    info.innerHTML = v.info,
                    emoji.innerHTML = v.img
                      })
                      C.classList.add("active");
                      F.classList.remove("active");
      }
      else if(degree == 'C'){
        x = (celsius.innerHTML -32)  * 5 / 9;
        celsius.innerHTML = Math.round(x);
        C.classList.add("active");
        F.classList.remove("active");
      }
      else if(degree == 'F'){
        x = (celsius.innerHTML * 9 / 5) + 32;
          celsius.innerHTML = Math.round(x);
          F.classList.add("active");
          C.classList.remove("active");
      }
    }
}

weather = new Weatherdetails();
setInterval(weather.showdaytime,1000)
