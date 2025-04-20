import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import $ from 'jquery';
window.$ = $;

import 'foundation-sites'
import 'foundation-sites/dist/js/plugins/foundation.orbit';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
