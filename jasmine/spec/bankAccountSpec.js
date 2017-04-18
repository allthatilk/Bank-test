describe("Bank Account", function() {
  var account = new Account()

  beforeEach(function() {
    account.balance = 0
  })

  afterEach(function(){
    account.balance = 0
  })

  describe("can be created", function() {

    it("for a customer", function() {
      expect(account).toEqual(jasmine.any(Account))
    })
  })

  describe("can manage money", function() {

    it("by recieving a deposit", function(){
      account.deposit(500)
      expect(account.balance).toEqual(500)
    })

    it("by deducting a withdrawal", function() {
      account.withdraw(50)
      expect(account.balance).toEqual(-50)
    })
  })
})
