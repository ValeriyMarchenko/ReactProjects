import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import '../styles/Country.css';
import PropTypes from "prop-types";

function Country(props) {
    const [selected, changeSelected] = useState(false);

    return(
        <tr className={selected ? "selected-country" : ''}>
            <td>{props.name}</td>
            <td>{props.capital}</td>
            <td>
                {!selected ? <Button variant="warning" onClick={() => changeSelected(true)}>Add</Button> : <Button variant="dark" onClick={() => changeSelected(false)}>Remove</Button>}
                
            </td>
        </tr>
    );
}

Country.defaultProps = {
    capital: "Not available"
}

Country.propTypes = {
    country: PropTypes.object, // oneOfType()
    selected: PropTypes.bool
};

export default Country;