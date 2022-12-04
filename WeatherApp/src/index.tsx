import * as React from "react";
// import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/App";


// render(<App/>, document.getElementById("root"));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);