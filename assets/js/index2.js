
const subtitles = document.getElementsByClassName("card-subtitle");

const createWord = (text, index) => {
  const word = document.createElement("span");
  word.innerHTML = `${text} `;
  word.classList.add("card-subtitle-word");
  word.style.transitionDelay = `${index * 40}ms`;
  return word;
}

const addWord = (text, index, subtitle) => subtitle.appendChild(createWord(text, index, subtitle));

const createSubtitle = (text, subtitle) => text.split(" ").map((word, index) => addWord(word, index, subtitle));

createSubtitle("Just enter a city name below to find out what artists are playing near you.", subtitles[0]);
createSubtitle("Here are thier albums", subtitles[1]);


const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const cityInput = document.querySelector('input[name="citySpace"]');
  const city = cityInput.value;

  const url = `https://app.ticketmaster.com/discovery/v2/events.json?size=5&segmentName=music&city=${city}&sort=date,name,asc&apikey=YYlLAH31UiK7q5rmORIBVL1Amhm4GFR5`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'beb832eb9emsh0ba22b478ef7f14p194d29jsn3812d0e6091d',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const events = data._embedded.events;
      
      events.forEach(event => {
        const artistName = event.name;
        const artistUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`;

        

        fetch(artistUrl, options)
          .then(response => response.json())
          .then(response => {
            localStorage.clear();
            const album = response.data[0].album;
            const albumCoverUrl = album.cover;
            const img = document.createElement("img");
            img.src = albumCoverUrl;
            subtitles[1].appendChild(img);
          })
          .catch(err => console.error(err));
      });
    });
});  
