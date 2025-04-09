const albumData = {
  title: "Graduation",
  artist: "Kanye West",
  releaseDate: "September 11, 2007",
  genre: "Hip Hop",
  cover: "../img/Album2.jpeg",
  tracks: [
    { title: "Good Morning", preview: "", lyrics: "Wake up, Mr. West..." },
    { title: "Champion", preview: "", lyrics: "Did you realize that you were a champion in their eyes?" },
    { title: "Stronger", preview: "", lyrics: "That that don't kill me, can only make me stronger..." },
    { title: "I Wonder", preview: "", lyrics: "Find your dreams come true..." },
    { title: "Good Life (feat. T-Pain)", preview: "", lyrics: "Welcome to the good life..." },
    { title: "Can't Tell Me Nothing", preview: "", lyrics: "Wait 'til I get my money right..." },
    { title: "Barry Bonds (feat. Lil Wayne)", preview: "", lyrics: "Here's another hit, Barry Bonds..." },
    { title: "Drunk and Hot Girls (feat. Mos Def)", preview: "", lyrics: "La-da-da-da-da..." },
    { title: "Flashing Lights (feat. Dwele)", preview: "", lyrics: "Flashing lights..." },
    { title: "Everything I Am", preview: "", lyrics: "Everything I'm not made me everything I am..." },
    { title: "The Glory", preview: "", lyrics: "The glory, the story..." },
    { title: "Homecoming (feat. Chris Martin)", preview: "", lyrics: "Do you think about me now and then?" },
    { title: "Big Brother", preview: "", lyrics: "Big Brother was Big's brother..." }
  ]
};

const albumInfo = document.getElementById('albumInfo');
const trackList = document.getElementById('trackList');
const trackDetails = document.getElementById('trackDetails');

function renderAlbum() {
  albumInfo.innerHTML = `
    <h1>${albumData.title}</h1>
    <h2>by ${albumData.artist}</h2>
    <img src="${albumData.cover}" alt="Album Cover"/>
    <p>Released: ${albumData.releaseDate}</p>
    <p>Genre: ${albumData.genre}</p>
  `;

  albumData.tracks.forEach((track, i) => {
    const div = document.createElement('div');
    div.className = 'track';
    div.textContent = `${i + 1}. ${track.title}`;
    div.onclick = () => showTrackDetails(track);
    trackList.appendChild(div);
  });
}

function showTrackDetails(track) {
  trackDetails.classList.remove('hidden');
  trackDetails.innerHTML = `
    <h3>${track.title}</h3>
    ${track.preview ? `<audio controls src="${track.preview}" class="w-full"></audio>` : ""}
    <p>${track.lyrics}</p>
    <button class="back-button" onclick="trackDetails.classList.add('hidden')">Schließen</button>
  `;
}

// Dark Mode Toggle
document.getElementById('darkToggle').addEventListener('change', (e) => {
  document.body.classList.toggle('dark', e.target.checked);
});

function hideTrackDetails() {
  trackDetails.classList.add('hidden');
}

renderAlbum();
