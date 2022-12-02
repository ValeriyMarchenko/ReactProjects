import React, {useState} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import "../styles/Countries.css"
import Country from "./Country";

function Countries() {
    const [countries, setCountries] = useState([])
    if (!countries.length) {
        axios.get("https://restcountries.com/v2/all").then(res => {
            console.log(res);
            setCountries(res.data);
        });
    }
    
    return (
        <Table striped bordered hover className={"countries"}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {countries.map(country => country.capital ? <Country key={country.alpha3Code} 
                name={country.name} capital={country.capital}/> : <Country key={country.alpha3Code} name={country.name}/>)}       
            </tbody>
        </Table>
    );
}
//  country={country}
export default Countries;