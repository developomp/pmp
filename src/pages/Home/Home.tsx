import { invoke } from "@tauri-apps/api"
import { Component, createResource, Suspense } from "solid-js"

import logo from "@/assets/logo.svg"

async function greet(name: string): Promise<string> {
    return await invoke("greet", { name })
}

const Home: Component = () => {
    const [name] = createResource("pomp", greet)

    return (
        <>
            <h1>pmp</h1>
            <img src={logo} class="aspect-square w-16 rounded-full" />
            <input type="range" min="0" max="50" value="10" step="1" />

            <Suspense fallback={<p>Loading...</p>}>
                <p>{name()}</p>
            </Suspense>
        </>
    )
}

export default Home
