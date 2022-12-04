import * as React from "react";
import "../styles/Main.css"
import Countries from "./Countries"
import Alerts from "./Alerts";
import Alert from "react-bootstrap/Alert";


function Main() {
    let alertString : string = "This is an alert — check it out!"

    return (
        <main>
            <div>
                <Alerts>
                    <Alert variant="danger">{alertString}</Alert>
                    <Alert variant="warning">{alertString}</Alert>
                </Alerts>
                <Countries/>
            </div>
        </main>
    );  
}

export default Main;