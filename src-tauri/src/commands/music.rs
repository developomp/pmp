#[tauri::command]
pub fn get_music_dir() -> Option<String> {
    if cfg!(target_os = "android") {
        todo!();
    } else {
        if let Some(music_dir) = dirs::audio_dir() {
            return Some(music_dir.display().to_string());
        }

        return None;
    }
}
