let totalWeight = 0;
let count = 0;

fetch(catsAPI)
 .then(response => response.json())
 .then(data => {
    data.forEach(breed => {
      if (breed.weight.metric) {
        totalWeight += breed.weight.metric;
        count++;
      }
    });
    const averageWeight = totalWeight / count;
    console.log(`Average weight of a cat in metric unit: ${averageWeight} kg`);
  })
 .catch(error => console.error('Error:', error));

 let languageCount = {};

fetch(countriesAPI)
 .then(response => response.json())
 .then(data => {
    data.forEach(country => {
      country.languages.forEach(language => {
        if (!languageCount[language.iso639_1]) {
          languageCount[language.iso639_1] = 1;
        } else {
          languageCount[language.iso639_1]++;
        }
      });
    });
    const totalLanguages = Object.keys(languageCount).length;
    console.log(`Total number of official languages in the world: ${totalLanguages}`);
  })
 .catch(error => console.error('Error:', error));