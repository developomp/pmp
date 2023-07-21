use serde::{Deserialize, Serialize};
use walkdir::WalkDir;

#[derive(Serialize, Deserialize, Debug)]
pub struct Music {
    name: String,
    path: String,
}

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

#[tauri::command]
pub fn list_music() -> Vec<Music> {
    let mut musics = Vec::new();

    if let Some(music_dir) = get_music_dir() {
        for entry in WalkDir::new(music_dir)
            .into_iter()
            // filter out invalid entries
            .filter_map(|e| e.ok())
            // filter out directories
            .filter(|e| !e.path().is_dir())
        {
            musics.push(Music {
                name: "placeholder name".to_string(),
                path: entry.path().display().to_string(),
            });
        }
    }

    return musics;
}
