var jokeC = document.getElementById("joke");
const btnn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

//  function for  fetch api jokes
var getJoke = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //    console.log(data) ====>>>  {error: false, category: 'Dark', type: 'single', joke: "My little daughter came to me all excited, saying …ed in and she still won't say where she got them.", flags: {…}, …}
      // category: "Dark";
      // error: false;

      // so we have used data.joke here joke is a property in which jokes have stored
      jokeC.textContent = `${data.joke}`;
    });
};

// calling getJoke functin to get new joke
btnn.addEventListener("click", getJoke);
