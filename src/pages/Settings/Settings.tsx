import { invoke } from "@tauri-apps/api"
import { Component, createResource, Suspense } from "solid-js"

async function greet(name: string): Promise<string> {
    return await invoke("greet", { name })
}

const Settings: Component = () => {
    const [name] = createResource("pomp", greet)

    return (
        <>
            <h1>Settings</h1>

            <Suspense fallback={<p>Loading...</p>}>
                <p>{name()}</p>
            </Suspense>
        </>
    )
}

export default Settings
