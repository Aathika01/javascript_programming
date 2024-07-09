// Store your first name, last name, age, country, city in your browser localStorage

const firstName = 'John';
const lastName = 'Doe';
const age = 30;
const country = 'USA';
const city = 'New York';

localStorage.setItem('firstName', firstName);
localStorage.setItem('lastName', lastName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('city', city);

const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JS'],
    country: 'USA',
    enrolled: true,
  };
  
  localStorage.setItem('student', JSON.stringify(student));

function PersonAccount(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = new Map();
    this.expenses = new Map();
  
    this.totalIncome = function() {
      let total = 0;
      for (const [income, amount] of this.incomes) {
        total += amount;
      }
      return total;
    };
  
    this.totalExpense = function() {
      let total = 0;
      for (const [expense, amount] of this.expenses) {
        total += amount;
      }
      return total;
    };
  
    this.accountInfo = function() {
      console.log(`Account Info: ${this.firstName} ${this.lastName}`);
      console.log(`Incomes: ${Array.from(this.incomes.keys()).join(', ')}`);
      console.log(`Expenses: ${Array.from(this.expenses.keys()).join(', ')}`);
    };
  
    this.addIncome = function(income, amount) {
      this.incomes.set(income, amount);
    };
  
    this.addExpense = function(expense, amount) {
      this.expenses.set(expense, amount);
    };
  
    this.accountBalance = function() {
      return this.totalIncome() - this.totalExpense();
    };
  }
  
  const personAccount = new PersonAccount('John', 'Doe');
  personAccount.addIncome('Salary', 5000);
  personAccount.addIncome('Investment', 1000);
  personAccount.addExpense('Rent', 1500);
  personAccount.addExpense('Food', 500);
  personAccount.accountInfo();
  console.log(`Total Income: ${personAccount.totalIncome()}`);
  console.log(`Total Expense: ${personAccount.totalExpense()}`);
  console.log(`Account Balance: ${personAccount.accountBalance()}`);