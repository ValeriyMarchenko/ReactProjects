import * as React from "react";
import "../styles/App.css"
import Header from "./Header"
import Main from "./Main"

function App()  {
    const buttonNewName = "Button"
    
    return (
        // as React.Fragment
        <>      
            <Header buttonName = {buttonNewName} />
            <Main/>
        </>
    );
  
}

export default App;