
import './layout.css'
import Time from './Time.js'
import Axios from 'axios'
import Toogle from './Toogle.js'
import News_card from './news_card.js'
import Day from './Day.jsx'

import React, { useEffect, useState } from "react";


function Layout  ()  { 
  
  const [city, setCity] = useState([]);
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("Kolkata");   
const [query, setQuery] = useState("Weather");
  const url = `http://api.weatherapi.com/v1/current.json?key=ba90dfe32fc54dcd800152728212707&q=${search}&aqi=yes`;

  var result3,img1;

async function getWeather(){

var     result = await Axios.get(url);

  setCity(result.data.current);
  // console.log(result.data.location.lat); 
  var lat =result.data.location.lat;
  var lon =result.data.location.lon;
  
  const url1=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=c770a2229a6f7ca0ceea1a516f8213ee`
  
  const url2=`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=c770a2229a6f7ca0ceea1a516f8213ee`
console.log(result.data.current.air_polution);
// var res=result.data.current.condition.air_quality;
// console.log( res.us)

//open weather 7 day forecast api
var result1=await Axios(url1);
// console.log(result1.data.daily);
// var res =result1.data.daily[0];

// open weather polution api
var result2=await Axios(url2);
// console.log(result2.data);
//  console.log(result2.data.list[0].main.aqi);

// //news api
//  result3=await Axios(url3);
//  console.log(result3.data);
//  setNews(result3.data.articles);






//card1
  document.getElementById('li_111').textContent= result.data.location.name; 
  document.getElementById('li_112').textContent= result.data.location.country;
 
  document.getElementById('test').textContent= result.data.current.temp_c;
  // document.getElementById('li_12').textContent= result.data.location.tz_id;

  document.getElementById('li_13').textContent= result.data.current.condition.text;
  // document.getElementById('li_15').textContent=;

  document.getElementById('li_15').textContent= result2.data.list[0].main.aqi;
  // document.getElementById('test').textContent= result.data.current.temp_c;



//card2
  document.getElementById('li_23').textContent= result1.data.daily[0].temp.day ;
    img1=`http://openweathermap.org/img/wn/${result1.data.daily[0].weather[0].icon}.png`
    console.log(img1);
  document.getElementById('li_24').textContent= result1.data.daily[1].temp.day ;
  document.getElementById('li_25').textContent= result1.data.daily[2].temp.day ; 
  document.getElementById('li_26').textContent= result1.data.daily[3].temp.day ;
  document.getElementById('li_27').textContent= result1.data.daily[4].temp.day ; 
  document.getElementById('li_28').textContent= result1.data.daily[5].temp.day ;
  document.getElementById('li_29').textContent= result1.data.daily[6].temp.day ;








//card3
  // document.getElementById('li_111').textContent= result.data.location.name; 
  // document.getElementById('li_112').textContent= result.data.location.country;
  document.getElementById('li_33').textContent= result.data.current.uv;; 
  document.getElementById('li_34').textContent= result.data.current.humidity;
  document.getElementById('li_35').textContent= result.data.current.vis_km; 
  document.getElementById('li_36').textContent= result.data.current.wind_kph;
  document.getElementById('li_37').textContent= result.data.current.pressure_mb; 
  document.getElementById('li_38').textContent= result.data.current.precip_mm;
   



}

async function getNews(){
  const url3=`https://newsapi.org/v2/everything?q=${query}&qInTitle
  =weather&apiKey=d02914806f1b47c7817b9d0062b190a4&pageSize=8&sortBy=popularity`

  //news api
 result3=await Axios(url3);
 console.log(result3.data);
 setNews(result3.data.articles);


}

useEffect(() => {
getWeather();
getNews();
}, [search])




  const currDate = new Date().toLocaleDateString(),
      currDay = new Date().getDate(),
      currYear = new Date().getFullYear();















  return (
    <div className="all sm:m-0">
      <div className=" min-h-screen flex items-center  ">
        <div className="layout1 flex-1 mx-auto pt-5 pl--1 pr-2  m-1">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            <li className="card_1  rounded-lg  row-span-3 mr-10px" >
              <div className="card1 overflow-hidden">
                <div className=" p-2 ">
                  <ul className=" grid grid-rows-1 gap-4 sm:grid-rows-4  sm:gap-1 md:grid-rows-1 md:gap-6 mt-1 ">
                    <h1 className="top_10" >Weather Forecast</h1>
                    <li className=" bg-white rounded-lg shadow-sm">
                      <div className="place_11 h-10  "> <h3 ><span id="li_111"></span>,<span id="li_112" ></span></h3></div>
                    </li>
                    

                    <li className=" bg-white rounded-lg shadow-sm  ">
                      <div className="temp_12 h-24   mt-0 "><h1 className="pt-8 pl-13" ><span id="test"></span>°C    </h1></div>
                    </li>




                    <li className=" bg-white rounded-lg shadow-xl">
                      <div className="fos_13 h-24  m-2">  <h3 >Forcast: <span id="li_13"></span></h3></div>
                    </li>
                    <li className="bg-white  rounded-lg ">
                      <div className="time_14 h-24 "> <Time/></div>
                    </li>
                    <li className="bg-white rounded-lg shadow-xl">
                      <div className="aqi_15 h-24  p-2 ">Air quality index<h3 className="pl-2 " id="li_15"></h3></div>

                   
                    
                    </li>
                    <li className="bg-white rounded-lg shadow-xl">
                      <div className="day_16 h-10  "><h3 className=" "><Day/></h3></div>
                    </li>
                    
                   
                      <div className="img_17 rounded-lg "><div><h1 className="bg-white"  ><a href="https://unsplash.com/">Free weather images</a> </h1></div>

                        
                        </div>
                    
                  </ul>
                </div>
              </div>
            </li>

            <li className="card_2 bg-indigo-300 rounded-lg shadow-xl col-span-2 ">
              <div className=" m-2 overflow-hidden">
                <div>
                  <div>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-6 md:gap-2 mt-2 mr-2 ml-2 mb-0">   
                      <li className="bg-whit rounded-lg shadow-x col-span-2">
                        <div className="h- p-2 "><h4>Weekly Update</h4></div>
                      </li>

                      <li className="bg- rounded-lg shadow-l col-span-3">
                        <div className="h-10">
                          <div className="search_bar">
<input className="input" type="text" placeholder="search by place" value={search} onChange={(e)=>{setSearch(e.target.value)}} ></input>
<button className="search_btn sm:w-20px md:w-30px" onClick={()=>{getWeather()}} ><i class="fa fa-search" aria-hidden="true"></i>
</button>

</div></div>
                      </li>
                 

                      <li className="bg- rounded-lg shadow-l">
                        <div className="h-10 p-2"><Toogle/></div>
                      </li>
                    
                    </ul>
                  </div>
                  <div className="days pb-0">
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-7 md:gap-2 mr-1">
                      <li className="bg-white rounded-lg shadow-xl ">
                        <div className="h-24 p-2 font-bold sm:text-xs">day: 1<h4 id="li_23"></h4>°C </div>
                      </li>
                     
                      <li className="bg-white rounded-lg shadow-xl">
                        <div className="h-24 p-2 font-bold sm:text-xs">day: 2<h4 id="li_25"></h4>°C</div>
                      </li>
                       <li className="bg-white rounded-lg shadow-xl">
                        <div className="h-24 p-2 font-bold sm:text-xs">day: 3<h4 className=" " id="li_24"></h4>°C</div>
                      </li>
                      <li className="bg-white rounded-lg shadow-xl">
                        <div className="h-24 p-2 font-bold sm:text-xs">day: 4<h4 id="li_26"></h4>°C</div>
                      </li>
                      <li className="bg-white rounded-lg shadow-xl">
                        <div className="h-24 p-2 font-bold sm:text-xs">day: 5<h4 id="li_27"></h4>°C</div>
                      </li>
                      <li className="bg-white rounded-lg shadow-xl">
                        <div className="h-24 p-2 font-bold sm:text-xs">day: 6<h4 id="li_28"></h4>°C</div>
                      </li>
                      <li className="bg-white rounded-lg shadow-xl">
                        <div className="h-24 p-2 font-bold sm:text-xs">day: 7<h4 id="li_29"></h4>°C</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="card_3 bg-gray- rounded-lg shadow-xl col-span-2">
              <div className="card_1">
                <div>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6 md:gap-2 mt-2 mr-2 ml-2 mb-1">
                    <li className="bg-whit rounded-lg shadow-l col-span-5">
                      <div className="h-10 p-1 "><h3>Today's highlits</h3></div>
                    </li>
                    {/* <li className="bg-white rounded-lg shadow-xl">
                      <div className="h-10"></div>
                    </li> */}
                  </ul>
                </div>

                <div className="highlights m-4 overflow-hidden">
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4 mt-1">
                    <li className="bg-white rounded-lg shadow-xl">
                      <div className="uv_33 h-24 p-3 m-2">UV<h1> <span id="li_33"></span> </h1></div>
                    </li>
                    <li className="bg-white rounded-lg shadow-xl">
                      <div className="hm_34 h-24 p-3">Humidity<h1> <span id="li_34"></span> </h1></div>
                    </li>
                    <li className="bg-white rounded-lg shadow-xl">
                      <div className="vs_35 h-24 p-3 ">Visibility<h1> <span id="li_35"></span><span>km</span> </h1></div>
                    </li>
                    <li className="bg-white rounded-lg shadow-xl">
                      <div className="wn_36 h-24 p-3 m-2">Wind<h1> <span id="li_36"></span> km</h1></div>
                    </li>
                    <li className=" bg-white rounded-lg shadow-xl">
                      <div className="ps_37 h-24 p-3"> Pressure<h1><span id="li_37"></span> mb</h1></div>
                    </li>
                    <li className="bg-white rounded-lg shadow-xl">
                      <div className="pr_38 h-24 p-3">Prcipitation <h1><span id="li_38"></span> mm </h1></div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="bg-gra rounded-lg shadow-xl col-span-2">
              <div className="card_1">
                <div >
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-2 mt-2 mr-2 ml-2 mb-0">
                    
                    <li className="bg-whit rounded-lg shadow-x">
                      <div ><h5 className="news_hed ">Weather News</h5></div>
                    </li>
                    <li className="bg-white rounded-lg shadow-xl col-span-2">
                    <div className=" p-2 h-10">
                          <div className="search_bar">
<input className="input" type="text" placeholder="search by place" value={query} onChange={(e)=>{setQuery(e.target.value)}} ></input>
<button className="search_btn sm:w-20px md:w-30px" onClick={()=>{getNews()}} ><i class="fa fa-search" aria-hidden="true"></i>
</button>

</div></div>
            
                    </li>
                    
                  </ul>
                </div>

                <div className="pageSize m-4">
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4 m-1 p-1">
                       {news.map((news)=>{
                     return  <News_card news={news} />

                   })}
                
               
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
