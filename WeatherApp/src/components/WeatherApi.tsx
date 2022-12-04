import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function WeatherApi () {

    const [weather, setWeather] = useState([]);
    const apiKey = '9f6e39d5164ffaa8f93b137046a1ae75';
    let city = 'London';
    const url : string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    
        axios.get(url).then( res => {
            console.log(res);
            setWeather(res.data);
        })
    
    

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Temp</th>
                </tr>
            </thead>
            <tbody>
                {weather.map( e => <p>{e.main}</p>)}       
            </tbody>
        </Table>
    );
}

export default WeatherApi;