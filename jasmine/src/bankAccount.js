'use strict'

;(function(exports) {

  function Account() {
    this.balance = 0
    this.transactionRecord = []
  }

  Account.prototype.deposit = function(money) {
    this.balance += money
    this.saveTransaction(this.balance, money, "-")
  }

  Account.prototype.withdraw = function(money) {
    this.balance -= money
    this.saveTransaction(this.balance, "-", money)
  }

  Account.prototype.saveTransaction = function(balance, credit, debit) {
    var transaction = {
      date : transactionDate(),
      credit: credit,
      debit: debit,
      balance: balance
    }
    this.transactionRecord.push(transaction)
  }

  exports.Account = Account

})(this)
