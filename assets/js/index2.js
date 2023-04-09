// !hamburger Menu! //

function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}

// ! Cards Animation //

const subtitles = document.getElementsByClassName("card-subtitle");

const createWord = (text, index) => {
  const word = document.createElement("span");
  word.innerHTML = `${text} `;
  word.classList.add("card-subtitle-word");
  word.style.transitionDelay = `${index * 40}ms`;
  return word;
}

const addWord = (text, index, subtitle) => subtitle.appendChild(createWord(text, index));

const createSubtitle = (text, subtitle) => text.split(" ").map((word, index) => addWord(word, index, subtitle));

createSubtitle("Just enter a city name below to find out what artists are playing near you.", subtitles[0]);
createSubtitle("The greatest glory in living lies not in never falling, but in rising every time we fall.", subtitles[1]);
