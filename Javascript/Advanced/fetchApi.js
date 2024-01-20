let catPromise = fetch("https://catfact.ninja/fact");

const data = catPromise
  .then((res) => res.json())
  .then((data) => {
    return data;
  })
  .catch((err) => console.log(err));
