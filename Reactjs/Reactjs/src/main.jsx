import { createRoot } from 'react-dom/client'
import Abc from './App.jsx';

import {a , b} from "./App.jsx";

console.log(a,b);

createRoot(document.getElementById('root')).render( <Abc />)
