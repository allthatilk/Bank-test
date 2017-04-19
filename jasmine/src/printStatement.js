'use strict'

;(function(exports) {

  function Statement(account) {
    this.account = account.transactionRecord
  }

    Statement.prototype.createStatement = function() {
      var statement = this.account.map(function(item) {
        var transaction = item
        return Object.values(transaction).join(" || ")
      })
      return statement
    }

    Statement.prototype.formatStatement = function() {
      var toFormat = this.createStatement()
      toFormat.splice(0, 0, "date || credit || debit || balance")
      var statement = toFormat.map(function(line) {
        return line
      }).join("\n")

      return statement
    }
    
    Statement.prototype.print = function() {
      return this.formatStatement()
    }

    exports.Statement = Statement
})(this)
