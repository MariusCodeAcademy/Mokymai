//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

// async function getJoke() {
//     const joke = fetch(apiUrl);
//         .then(response => response.json())
//         .then(result => console.log(result.value))

// }

async function getJoke() {
    const response = await fetch(apiUrl);
    const jokeJson = await response.json()
    const jokeValue = jokeJson.value;
    console.log(jokeValue)
}

getJoke();
