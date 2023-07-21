import { audioDir } from "@tauri-apps/api/path"
import { Component, createResource, Suspense } from "solid-js"

const Settings: Component = () => {
    const [audioDirPath] = createResource(audioDir)

    return (
        <>
            <h1>Settings</h1>

            <Suspense fallback={<p>Loading...</p>}>
                <p>{audioDirPath()}</p>
            </Suspense>
        </>
    )
}

export default Settings
