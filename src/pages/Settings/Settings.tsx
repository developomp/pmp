import { Component, createResource, Suspense } from "solid-js"

import { getMusicDir } from "@/data"

const Settings: Component = () => {
    const [musicDir] = createResource(getMusicDir)

    return (
        <>
            <h1>Settings</h1>

            <Suspense fallback={<p>Loading...</p>}>
                <p>{musicDir()}</p>
            </Suspense>
        </>
    )
}

export default Settings
