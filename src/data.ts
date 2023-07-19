import { invoke } from "@tauri-apps/api"

import tauriCommands from "@/tauriCommands"

interface Data {
    musicDir: string | undefined
}
const data: Data = {
    musicDir: undefined,
}
export default data

export async function getMusicDir(): Promise<string | undefined> {
    if (data.musicDir !== undefined) return data.musicDir

    return (data.musicDir = await invoke(tauriCommands.getMusicDir))
}
