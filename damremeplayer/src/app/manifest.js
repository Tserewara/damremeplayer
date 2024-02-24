import { MetadataRoute } from 'next'

export default function manifest() {
    return {
        "theme_color": "#256B41",
        "background_color": "#A7D982",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "name": "Damreme Player",
        "short_name": "Damreme Player",
        "description": "Learn how to speak Xavante starting with simple phrases!",
        "icons": [
            {
                "src": "/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/icon-256x256.png",
                "sizes": "256x256",
                "type": "image/png"
            },
            {
                "src": "/icon-384x384.png",
                "sizes": "384x384",
                "type": "image/png"
            },
            {
                "src": "/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    }
}