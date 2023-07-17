import { Route, Routes } from "@solidjs/router"
import { type Component } from "solid-js"

import Nav from "@/components/Nav"
import Home from "@/pages/Home"
import Playing from "@/pages/Playing"
import Settings from "@/pages/Settings"

const App: Component = () => {
    return (
        <>
            <div class="m-6 mb-0 flex max-w-screen-lg flex-grow flex-col items-center">
                <Routes>
                    <Route path="/" component={Home} />
                    <Route path="/playing" component={Playing} />
                    <Route path="/settings" component={Settings} />
                </Routes>
            </div>
            <Nav />
        </>
    )
}

export default App
