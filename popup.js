document.getElementById("fetchLyrics").addEventListener("click", async () => {
    const status = document.getElementById("status");
    const lyricsDiv = document.getElementById("lyrics");
  
    // Clear previous lyrics
    lyricsDiv.innerHTML = "";
  
    // Get the current tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    // Inject a script to get the song title and artist from Spotify
    try {
      const result = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          const songElement = document.querySelector('[data-testid="now-playing-widget"]');
          if (songElement) {
            const songTitle = songElement.querySelector('[data-testid="context-item-link"]').innerText;
            const artistName = songElement.querySelector('[data-testid="context-item-info-artist"]').innerText;
            return { songTitle, artistName };
          }
          return null;
        },
      });
  
      if (result && result[0].result) {
        const { songTitle, artistName } = result[0].result;
        status.innerText = `Fetching lyrics for: ${songTitle} by ${artistName}...`;
  
        // Fetch lyrics using the Lyrics.ovh API
        const response = await fetch(
          `https://api.lyrics.ovh/v1/${encodeURIComponent(artistName)}/${encodeURIComponent(songTitle)}`
        );
        const data = await response.json();
  
        if (data.lyrics) {
          lyricsDiv.innerText = data.lyrics;
        } else {
          lyricsDiv.innerText = "Lyrics not found.";
        }
      } else {
        status.innerText = "Could not detect the song. Make sure Spotify is playing.";
      }
    } catch (error) {
      console.error(error);
      status.innerText = "An error occurred. Please try again.";
    }
  });