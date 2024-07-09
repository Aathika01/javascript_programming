// Sort countries by name
countries.sort((a, b) => a.name.localeCompare(b.name));

// Sort countries by capital
countries.sort((a, b) => a.capital.localeCompare(b.capital));

// Sort countries by population
countries.sort((a, b) => b.population - a.population);

function mostSpokenLanguages(countries, n) {
    const languages = {};
    countries.forEach(country => {
      country.languages.forEach(language => {
        if (languages[language]) {
          languages[language]++;
        } else {
          languages[language] = 1;
        }
      });
    });
  
    const sortedLanguages = Object.keys(languages).sort((a, b) => languages[b] - languages[a]);
    return sortedLanguages.slice(0, n).map(language => ({ country: language, count: languages[language] }));
  }
  
  console.log(mostSpokenLanguages(countries, 10));
  console.log(mostSpokenLanguages(countries, 3));

  function mostPopulatedCountries(countries, n) {
    return countries.sort((a, b) => b.population - a.population).slice(0, n).map(country => ({ country: country.name, population: country.population }));
  }
  
  console.log(mostPopulatedCountries(countries, 10));
  console.log(mostPopulatedCountries(countries, 3));