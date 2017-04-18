'use strict'

;(function(exports) {

  function Account() {
    this.balance = 0
  }

  Account.prototype.deposit = function(money) {
    this.balance += money
  }

  Account.prototype.withdraw = function(money) {
    this.balance -= money
  }

  exports.Account = Account

})(this)
