import {useState} from "react"
import SearchBox from "./Components/SearchBox/SearchBox"
import WeatherDetails from "./Components/WeatherDeatils/WeatherDetails"
import Footer from "./Components/Footer/Footer"
import"./App.css"
export default function  App(){

 const [text, setText] = useState("");
 const [cityNotFound, setcityNotFound] = useState(false);
 const [loading, setLoading] = useState(false);

 let api_key = "920b2782d1dc273b2dee40bc175185cf";
 async function search() {
   setLoading(true);

   let url = ` https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

   try {
     let res = await fetch(url);
     let data = await res.json();
     console.log(data);
     if (data.cod === "404") {
       console.error("City Not Found");
       setcityNotFound(true);
       setLoading(false);
       return;
     }
   } catch (error) {
     console.error("An error occured:", error.message);
   } finally {
     setLoading(false);
   }
 }

 function handleChange(e) {
   setText(e.target.value);
 }

 function handleClick() {
   search();
 }

 function handleKeypress(e) {
   if (e.key === "Enter") {
     search();
   }
 }

 return (
   <main className="appcontainer">
     <div className="weathercontainer">
       <SearchBox
         text={text}
         cityNotFound={cityNotFound}
         loading={loading}
         handleChange={handleChange}
         handleClick={handleClick}
         handleKeypress={handleKeypress}
       />

       <WeatherDetails />

       <Footer />
     </div>
   </main>
 );

 
}