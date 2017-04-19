describe("Bank Account Statement", function() {
  var account = new Account()

  beforeEach(function() {
    account.deposit(100)
    account.deposit(300)
    account.withdraw(150)
  })

  afterEach(function() {
    account.balance = 0
    account.transactionRecord = []
  })

  describe("can be printed", function() {
    it("and accurately displays transaction details", function() {
      expect(account.printStatement()).toEqual (
        `date || credit || debit || balance\n\
${transactionDate()} || 100 || - || 100\n\
${transactionDate()} || 300 || - || 400\n\
${transactionDate()} || - || 150 || 250`
      )
    })
  })
})
