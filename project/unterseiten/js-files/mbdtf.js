function showTrackDetails(trackName) {
  const trackDetails = document.getElementById("track-details");
  const trackTitle = document.querySelector(".track-title");
  const trackLyrics = document.querySelector(".track-lyrics");
  const audioPlayer = document.querySelector(".audio-player");

  // Track-Daten
  const tracks = {
    "Power": {
      title: "Power",
      lyrics: "No one man should have all that power...",
      audio: ""
    },
    "Runaway": {
      title: "Runaway",
      lyrics: "And I always find, yeah I always find something wrong...",
      audio: ""
    },
    "Monster": {
      title: "Monster",
      lyrics: "I'm a monster, I'm a m-monster...",
      audio: ""
    },
    "All of the Lights": {
      title: "All of the Lights",
      lyrics: "All of the lights, all of the lights...",
      audio: ""
    },
    "Devil in a New Dress": {
      title: "Devil in a New Dress",
      lyrics: "I fell in love with a devil in a new dress...",
      audio: ""
    },
    "Blame Game": {
      title: "Blame Game",
      lyrics: "We all make mistakes sometimes...",
      audio: ""
    }
  };

  // Wähle den Track aus
  const track = tracks[trackName];
  
  trackTitle.textContent = track.title;
  trackLyrics.textContent = track.lyrics;
  audioPlayer.src = track.audio;

  trackDetails.classList.remove("hidden");
}
