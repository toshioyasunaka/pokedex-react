import {createRoot} from "react-dom/client"

import App from './main/App'

const el = document.getElementById('root')
const root = createRoot(el)

root.render(
    <App />
)