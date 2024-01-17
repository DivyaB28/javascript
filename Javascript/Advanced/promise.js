const myPro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 2000);
});

myPro
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally block"));

let url = fetch("https://catfact.ninja/fact");

url
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    dataRes = data;
  })
  .catch((err) => console.log(err));

async function getData() {
  //   let res = await fetch("https://catfact.ninja/fact");
  //   let data = await res.json();
  //   console.log(data);

  try {
    let res = await fetch("https://catfact.ninja/fact");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
console.log(getData());
