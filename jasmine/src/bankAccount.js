'use strict'

;(function(exports) {

  function Account() {
    this.balance = 0
    this.transactionRecord = []
  }

  Account.prototype.deposit = function(money) {
    this.balance += money
    this.saveTransaction(money, this.balance, "credit")
  }

  Account.prototype.withdraw = function(money) {
    this.balance -= money
    this.saveTransaction(money, this.balance, "debit")
  }

  Account.prototype.saveTransaction = function(money, balance, type) {
    var transaction = [transactionDate(), type, money, balance]
    this.transactionRecord.push(transaction)
  }

  function transactionDate() {
    var date =  new Date()
    var stringDate = date.toString()
    var dateArray = stringDate.split(" ")
    var month = date.getMonth() + 1

    var dd = dateArray[2]
    var mm = month < 9 ? "0" + month : month
    var yyyy = dateArray[3]

    return dd + "/" + mm + "/"+ yyyy
  }

  exports.Account = Account

})(this)
