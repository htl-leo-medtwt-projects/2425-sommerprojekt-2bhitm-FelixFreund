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
      audio: "https://www.example.com/audio/power.mp3"
    },
    "Runaway": {
      title: "Runaway",
      lyrics: "And I always find, yeah I always find something wrong...",
      audio: "https://www.example.com/audio/runaway.mp3"
    },
    "Monster": {
      title: "Monster",
      lyrics: "I'm a monster, I'm a m-monster...",
      audio: "https://www.example.com/audio/monster.mp3"
    },
    "All of the Lights": {
      title: "All of the Lights",
      lyrics: "All of the lights, all of the lights...",
      audio: "https://www.example.com/audio/all_of_the_lights.mp3"
    },
    "Devil in a New Dress": {
      title: "Devil in a New Dress",
      lyrics: "I fell in love with a devil in a new dress...",
      audio: "https://www.example.com/audio/devil_in_a_new_dress.mp3"
    },
    "Blame Game": {
      title: "Blame Game",
      lyrics: "We all make mistakes sometimes...",
      audio: "https://www.example.com/audio/blame_game.mp3"
    }
  };

  // Wähle den Track aus
  const track = tracks[trackName];
  
  trackTitle.textContent = track.title;
  trackLyrics.textContent = track.lyrics;
  audioPlayer.src = track.audio;

  trackDetails.classList.remove("hidden");
}
