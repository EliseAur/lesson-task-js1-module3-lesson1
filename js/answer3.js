// Question 3

// - Create an async function called `getCatFacts`.
// - Inside the function make an API call to the below URL using async/await, and save it to a variable called `response`.
// - Create a variable called `results` where you await the json of your response variable.
// - Console.log the length of `results`.

// ```
// https://noroff.herokuapp.com/v1/cat-facts/facts
// ```

async function getCatFacts() {
    const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";
    const response = await fetch(url);
    const results = await response.json();

    console.log(results.length);
}

getCatFacts();
