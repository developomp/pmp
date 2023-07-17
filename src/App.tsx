import { Route, Routes } from "@solidjs/router"
import { type Component } from "solid-js"

import Home from "./pages/Home"

const App: Component = () => {
    return (
        <div class="mx-auto flex max-w-screen-lg flex-col p-6">
            <Routes>
                <Route path="/" component={Home} />
            </Routes>
        </div>
    )
}

export default App
