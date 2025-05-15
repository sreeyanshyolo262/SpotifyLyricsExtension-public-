# Spotify Lyrics Finder Chrome Extension

This Chrome extension fetches lyrics for the song currently playing on Spotify using the [Lyrics.ovh API](https://lyrics.ovh).

Demo:https://youtu.be/5yWBp-M6z7s

## Features
- Automatically detects the song title and artist from Spotify's web player.
- Fetches and displays lyrics for the currently playing song.

## Installation

### Step 1: Download the Extension
1. Clone this repository or download the ZIP file and extract it to a folder.

### Step 2: Load the Extension in Chrome
1. Open Google Chrome and go to `chrome://extensions/`.
2. Enable **Developer mode** by toggling the switch in the top-right corner.
3. Click **Load unpacked** and select the folder where you extracted the extension files.

### Step 3: Use the Extension
1. Open [Spotify Web Player](https://open.spotify.com/) and start playing a song.
2. Click the extension icon in the Chrome toolbar.
3. Click the **Get Lyrics** button to fetch and display the lyrics.

## How It Works
- The extension uses Chrome's `scripting` API to extract the song title and artist from Spotify's web player.
- It then fetches the lyrics using the [Lyrics.ovh API](https://lyrics.ovh).

## Files in the Extension
- `manifest.json`: Defines the extension's metadata and permissions.
- `popup.html`: The user interface of the extension.
- `popup.js`: Handles the logic for fetching and displaying lyrics.
- `styles.css`: Optional styling for the extension's UI.


---

Made with ❤️ by Sreeyansh
