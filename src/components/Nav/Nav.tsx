import "./style.scss"

import { AiFillHome } from "solid-icons/ai"
import { BsCloudDownloadFill } from "solid-icons/bs"
import { FaSolidMusic } from "solid-icons/fa"
import { IoSettingsSharp } from "solid-icons/io"
import { Component } from "solid-js"

import NavButton from "./NavButton"

const Nav: Component = () => {
    return (
        <nav class="flex h-24 w-full items-center justify-center bg-zinc-800">
            <NavButton href="/">
                <AiFillHome />
            </NavButton>
            <NavButton href="/playing">
                <FaSolidMusic />
            </NavButton>
            <NavButton href="/download">
                <BsCloudDownloadFill />
            </NavButton>
            <NavButton href="/settings">
                <IoSettingsSharp />
            </NavButton>
        </nav>
    )
}

export default Nav
