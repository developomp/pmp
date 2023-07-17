import { type Component, createSignal, Suspense } from "solid-js"
import { invoke } from "@tauri-apps/api/tauri"

import logo from "@/assets/logo.svg"

const App: Component = () => {
    const [greetMsg, setGreetMsg] = createSignal("")

    invoke("greet", { name: "pomp" }).then(msg => setGreetMsg(msg as string))

    return (
        <>
            <h1>pmp</h1>

            <img src={logo} class="w-16 aspect-square rounded-full" />

            <Suspense fallback={<p>Loading...</p>}>
                <p>{greetMsg()}</p>
            </Suspense>
        </>
    )
}

export default App
