const isValidVariable = (str) => {
    return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(str);
  };
  
  console.log(isValidVariable('first_name')); // True
  console.log(isValidVariable('first-name')); // False
  console.log(isValidVariable('1first_name')); // False
  console.log(isValidVariable('firstname')); // True