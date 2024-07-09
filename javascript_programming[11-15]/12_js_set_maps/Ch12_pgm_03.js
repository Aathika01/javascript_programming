function mostSpokenLanguages(countries, n) {
    const languageCounts = {};
  
    countries.forEach((country) => {
      Object.keys(countryLanguages[country]).forEach((language) => {
        if (languageCounts[language]) {
          languageCounts[language] += countryLanguages[country][language];
        } else {
          languageCounts[language] = countryLanguages[country][language];
        }
      });
    });
  
    const sortedLanguages = Object.keys(languageCounts).sort((a, b) => languageCounts[b] - languageCounts[a]);
  
    return sortedLanguages.slice(0, n).map((language) => ({ [language]: languageCounts[language] }));
  }
  
  console.log(mostSpokenLanguages(countries, 10));
  console.log(mostSpokenLanguages(countries, 3));