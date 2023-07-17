import { Component, Suspense, createSignal } from "solid-js"
import logo from "@/assets/logo.svg"
import { invoke } from "@tauri-apps/api"

const Home: Component = () => {
    const [greetMsg, setGreetMsg] = createSignal("")

    invoke("greet", { name: "pomp" }).then(msg => setGreetMsg(msg as string))

    return (
        <>
            <h1>pmp</h1>
            <img src={logo} class="aspect-square w-16 rounded-full" />
            <input type="range" min="0" max="50" value="10" step="1" />

            <Suspense fallback={<p>Loading...</p>}>
                <p>{greetMsg()}</p>
            </Suspense>
        </>
    )
}

export default Home
