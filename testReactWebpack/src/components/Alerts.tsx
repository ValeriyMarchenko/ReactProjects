import * as React from "react";


function Alerts (props) {
let children = props.children;
// let indexFlaf : 0 | 1;

    return (
        <>
            {
                // React.Children.map(children, (child, index) => {
                //     if(index != null) {
                //         console.log(child, index);
                //         return child;
                //     }
                // })

                React.Children.count(children)
            }
        </>
    );
}

export default Alerts;