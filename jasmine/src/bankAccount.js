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

  Account.prototype.createStatement = function() {
    var statement = this.transactionRecord.map(function(item) {
      var transaction = item
      return Object.values(transaction).join(" || ")
    })
    return statement
  }

  Account.prototype.formatStatement = function() {
    var toFormat = this.createStatement()
    toFormat.splice(0, 0, "date || credit || debit || balance")
    var statement = toFormat.map(function(line) {
      return line
    }).join("\n")

    return statement
  }

  Account.prototype.printStatement = function() {
    return this.formatStatement()
  }


  exports.Account = Account

})(this)

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
