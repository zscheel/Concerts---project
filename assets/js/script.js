//Hamburger menu//

function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}

//Splash Screen//

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 3000);
})

//Ticketmaster//

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const cityInput = document.querySelector('input[name="citySpace"]');
  const city = cityInput.value;

  const url = `https://app.ticketmaster.com/discovery/v2/events.json?size=5&segmentName=music&city=${city}&apikey=YYlLAH31UiK7q5rmORIBVL1Amhm4GFR5`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const events = data._embedded.events;
      events.forEach(event => {
        const artistName = event.name;
        console.log(artistName);
      });
    });
});

