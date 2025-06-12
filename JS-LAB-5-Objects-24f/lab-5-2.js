//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var bankCustomer = {
  lastName: "Li",
  branchNumber: 1111111111111111,
  accountBalance: 500.25,
  interestRate: 1.03,
  multipleAccounts: true,

//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
makeDeposit: function(amount) 
{
    bankCustomer.accountBalance = bankCustomer.accountBalance + amount;
    return "“Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2);
},

//4. Add your second method and test it.
makeWithdrawal: function (amount) 
{
    bankCustomer.accountBalance = bankCustomer.accountBalance - amount;
    return "“Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2);
  },

//Stretch Goal!
 Interest: function() {
    if (bankCustomer.multipleAccounts) {
      bankCustomer.interestRate = bankCustomer.interestRate + 0.005;
    }

    bankCustomer.accountBalance = bankCustomer.accountBalance * bankCustomer.interestRate;
    bankCustomer.accountBalance = bankCustomer.accountBalance.toFixed(2);

    return "Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2);
  }

 };
//5. Create the required output to complete steps 6-10 of the lab.

console.log("starting balance" + bankCustomer.accountBalance.toFixed(2));

console.log(bankCustomer.makeDeposit(200));

console.log("new balance" + bankCustomer.accountBalance.toFixed(2));

console.log(bankCustomer.makeWithdrawal(75));

console.log("new balance" + bankCustomer.accountBalance.toFixed(2));

//6. Once everything is working, tackle the Stretch Goal!
console.log(bankCustomer.addInterest());

console.log("new balance after interest: $" + bankCustomer.accountBalance.toFixed(2));