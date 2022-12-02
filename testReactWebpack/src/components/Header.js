import React, { useState } from "react";
import "../styles/Header.css"


function Header(props) {
    console.log(props);
    let [count, setNewCount] = useState(0);

    const handleClick = () => {
        setNewCount(count + 1);
        
    };

    return (
        <header>
            This is header
            <button className={count > 5 ? 'largeBtn' : 'smallBtn'} onClick={handleClick}>{props.buttonName} clicked: {count} times</button>
        </header>
    )
} 

export default Header;