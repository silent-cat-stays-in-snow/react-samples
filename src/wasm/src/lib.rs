use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn convert(data_url: &str) -> Option<Vec<u8>> {
    if let Ok((_, base64)) = get_mime_and_base64(data_url) {
        let buffer = base64::decode(base64).expect("failed decode");
        let image = image::load_from_memory(&buffer).expect("failed create image");

        Some(image.to_rgb8().into_raw())
    } else {
        None
    }
}

fn get_mime_and_base64(data_url: &str) -> Result<(String, String), &str> {
    if let Some(index) = data_url.find(";base64,") {
        let (first, last) = data_url.split_at(index);
        
        Ok((first.replace("data:", ""), last.replace(";base64,", "")))
    } else {
        Err("invalid dataUrl")
    }
}