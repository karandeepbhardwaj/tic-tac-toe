import React from "react";
import { createRoot } from 'react-dom/client';
import './styles.css'

import Game from "./components/Game";

const root = createRoot(document.getElementById('root'));
root.render(<Game/>);