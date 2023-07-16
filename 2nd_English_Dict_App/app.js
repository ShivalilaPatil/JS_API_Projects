const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");

const searchBtn = document.getElementById("search-btn");

// function
searchBtn.addEventListener("click", () => {
  let inputWord = document.getElementById("input-word").value;

  fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((res1) => {
      console.log(res1);
      result.innerHTML = `
      <div class="word">
          <h3>${inputWord}</h3>
          <button onclick="playSound()">
            <i class="fa-solid fa-volume-up"></i>
          </button>
        </div>
        <div class="details">
          <p>${res1[0].meanings[0].partOfSpeech}</p>
          <p>${res1[0].phonetics[1].text}</p>
        </div>
        <p class="word-meaning">${res1[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">${
          res1[0].meanings[0].definitions[0].example || ""
        }</p>`;

      sound.setAttribute("src", `${res1[0].phonetics[1].audio}`);
      // console.log(sound);
    })
    .catch(() => {
      result.innerHTML = `<h2 id="error">Couldn't Find The Word</h2>`;
    });
});

function playSound() {
  sound.play();
}
