import React from "react";
import { createRoot } from 'react-dom/client';
import './styles.css'

import { Board } from "./components/Board";

const root = createRoot(document.getElementById('root'));
root.render(<Board/>);

