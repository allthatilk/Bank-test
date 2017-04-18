describe("Bank Account", function() {
  var account = new Account()

  beforeEach(function() {
    account.balance = 0
    account.transactionRecord = []
  })

  afterEach(function(){
    account.balance = 0
    account.transactionRecord = []
  })

  describe("can be created", function() {

    it("for a customer", function() {
      expect(account).toEqual(jasmine.any(Account))
    })
  })

  describe("can manage money", function() {

    it("by receiving a deposit", function(){
      account.deposit(500)
      expect(account.balance).toEqual(500)
    })

    it("by deducting a withdrawal", function() {
      account.withdraw(50)
      expect(account.balance).toEqual(-50)
    })
    it("by saving records of transactions", function() {
      account.deposit(100)
      account.deposit(300)
      account.withdraw(150)
      expect(account.transactionRecord.length).toEqual(3)
    })
    it("by accurately recording transaction details", function() {
      account.deposit(100)
      account.withdraw(10)
      expect(account.transactionRecord).toEqual(
        [["18/04/2017", "credit", 100, 100],["18/04/2017", "debit", 10, 90]]
      )
    })
  })
})
