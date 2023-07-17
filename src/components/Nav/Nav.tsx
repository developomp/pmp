import "./style.scss"

import { A } from "@solidjs/router"
import { AiFillHome } from "solid-icons/ai"
import { BsCloudDownloadFill } from "solid-icons/bs"
import { FaSolidMusic } from "solid-icons/fa"
import { IoSettingsSharp } from "solid-icons/io"
import { Component } from "solid-js"

const Nav: Component = () => {
    return (
        <nav class="flex h-24 w-full items-center justify-center gap-10 bg-zinc-800 p-4">
            <A href="/">
                <AiFillHome />
            </A>
            <A href="/playing">
                <FaSolidMusic />
            </A>
            <A href="/download">
                <BsCloudDownloadFill />
            </A>
            <A href="/settings">
                <IoSettingsSharp />
            </A>
        </nav>
    )
}

export default Nav
