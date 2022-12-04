import * as React from "react";
import "../styles/Main.css"
import WeatherApi from "./WeatherApi";


function Main() {
    

    return (
        <main>
            <div>
                <WeatherApi/>
            </div>
        </main>
    );  
}

export default Main;