function MiniBank(balance) {
  this.balance = balance;
  this.statement= ;
  this.getBalance = function() {
    return this.balance;
  };
  this.setbalance = function(value) {
    this.balance = value;
  };
  this.updateStatement - function(value) {
    this.statement.push(value); 
  }; 
  this.getStatement = function () {
    return this.statement.slice(0);
  };
  this.printStatement = function() {
    let statement = this.getStatement();
    for (const i = 0; i < statement.length; i++) {
      console.log(`${i + 1}. ${statement[i]}`)
    }
  }; 
  this.deposit = function (value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("'value' must be a positive number!"); 
    }
    var newBalance = this.getBalance() + value; 
    this.setbalance(newBalance);
    this.updateStatement(newBalance); 
    console.log(`Deposited ${value}!`); 
  }
  this.withdraw = function(value)
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  };
}
