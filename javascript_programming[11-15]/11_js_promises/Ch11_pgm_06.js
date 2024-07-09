let catNames = [];

fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(breed => {
      catNames.push(breed.name);
    });
    console.log(catNames);
  })
  .catch(error => console.error('Error:', error));