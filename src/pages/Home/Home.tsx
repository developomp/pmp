import { Component, createResource, For } from "solid-js"

import { listMusic } from "@/data"

const Home: Component = () => {
    const [musics] = createResource(listMusic)

    return (
        <>
            <h1>Home</h1>
            <For each={musics()}>
                {(music, i) => {
                    return (
                        <p>
                            {i()} - {music.path}
                        </p>
                    )
                }}
            </For>
        </>
    )
}

export default Home
