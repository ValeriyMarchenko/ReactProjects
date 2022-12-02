import React from "react";
import "../styles/App.css"
import Header from "./Header.js"
import Main from "./Main.js"

function App()  {
    const buttonNewName = "Button"
    
    return (
        <React.Fragment>
            <Header buttonName = {buttonNewName} />
            <Main/>
        </React.Fragment>
    );
  
}

export default App;