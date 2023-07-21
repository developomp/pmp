import { invoke } from "@tauri-apps/api"

enum Command {
    listMusic = "list_music",
}

export interface Music {
    name: string
    path: string
}

export async function listMusic(): Promise<Music[]> {
    return await invoke<Music[]>(Command.listMusic)
}
