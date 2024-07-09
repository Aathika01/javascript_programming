// outer function
function createClosure() {
    let counter = 0;
  
    // inner function 1
    function incrementCounter() {
      counter++;
      console.log(`Counter: ${counter}`);
    }
  
    // inner function 2
    function decrementCounter() {
      counter--;
      console.log(`Counter: ${counter}`);
    }
  
    // inner function 3
    function resetCounter() {
      counter = 0;
      console.log(`Counter: ${counter}`);
    }
  
    return { incrementCounter, decrementCounter, resetCounter };
  }
  
  const closure = createClosure();
  closure.incrementCounter();
  closure.decrementCounter();
  closure.resetCounter(); 
  closure.incrementCounter();

  // outer function
function personAccount(firstname, lastname) {
    let incomes = new Map();
    let expenses = new Map();
  
    // inner function 1: totalIncome
    function totalIncome() {
      let total = 0;
      for (const [income, amount] of incomes) {
        total += amount;
      }
      return total;
    }
  
    // inner function 2: totalExpense
    function totalExpense() {
      let total = 0;
      for (const [expense, amount] of expenses) {
        total += amount;
      }
      return total;
    }
  
    // inner function 3: accountInfo
    function accountInfo() {
      console.log(`Account Info: ${firstname} ${lastname}`);
      console.log(`Incomes: ${Array.from(incomes.keys()).join(', ')}`);
      console.log(`Expenses: ${Array.from(expenses.keys()).join(', ')}`);
    }
  
    // inner function 4: addIncome
    function addIncome(income, amount) {
      incomes.set(income, amount);
    }
  
    // inner function 5: addExpense
    function addExpense(expense, amount) {
      expenses.set(expense, amount);
    }
  
    // inner function 6: accountBalance
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      totalIncome,
      totalExpense,
      accountInfo,
      addIncome,
      addExpense,
      accountBalance,
    };
  }
  
  const account = personAccount('John', 'Doe');
  account.addIncome('Salary', 5000);
  account.addIncome('Investment', 1000);
  account.addExpense('Rent', 1500);
  account.addExpense('Food', 500);
  account.accountInfo();
  console.log(`Total Income: ${account.totalIncome()}`);
  console.log(`Total Expense: ${account.totalExpense()}`);
  console.log(`Account Balance: ${account.accountBalance()}`);