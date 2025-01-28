import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import RenotesApp from './components/RenotesApp';


const root = createRoot(document.getElementById('root'))
root.render(<RenotesApp  />)
