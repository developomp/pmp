import { A } from "@solidjs/router"
import { Component, JSX } from "solid-js"

interface Props {
    href: string
    children: JSX.Element
}

const NavButton: Component<Props> = ({ children, href }) => {
    return (
        <A
            href={href}
            class="flex h-full w-full items-center justify-center hover:bg-zinc-600"
        >
            <button>{children}</button>
        </A>
    )
}

export default NavButton
