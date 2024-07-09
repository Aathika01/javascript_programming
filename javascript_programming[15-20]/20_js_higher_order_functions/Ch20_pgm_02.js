const totalPrice = products.reduce((acc, current) => {
    if (current.price!== '' && current.price!== undefined) {
      return acc + current.price;
    }
    return acc;
  }, 0);
  
  console.log(totalPrice);
  function categorizeCountries(pattern) {
    return countries.filter(country => country.includes(pattern));
  }
  
  console.log(categorizeCountries('land'));
  function countCountryInitials() {
    return countries.reduce((acc, country) => {
      const initial = country[0];
      if (acc[initial]) {
        acc[initial]++;
      } else {
        acc[initial] = 1;
      }
      return acc;
    }, {});
  }
  
  console.log(countCountryInitials());
  function getFirstTenCountries() {
    return countries.slice(0, 10);
  }
  
  console.log(getFirstTenCountries());
  function getLastTenCountries() {
    return countries.slice(-10);
  }
  
  console.log(getLastTenCountries());
  function mostCommonInitial() {
    const initials = countCountryInitials();
    return Object.keys(initials).reduce((max, current) => {
      if (initials[current] > initials[max]) {
        return current;
      }
      return max;
    }, '');
  }
  
  console.log(mostCommonInitial());
