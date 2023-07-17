/* @refresh reload */
import "./index.scss"
import "./styles/heading.scss"

import { Router } from "@solidjs/router"
import { render } from "solid-js/web"

import App from "./App"

render(
    () => (
        <Router>
            <App />
        </Router>
    ),
    document.getElementById("root") as HTMLElement,
)
