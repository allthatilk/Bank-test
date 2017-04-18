// describe("Bank Account Statement", function() {
//   var account = new Account()
//   var statement = new Statement(account)
//
//   beforeEach(function() {
//     account.deposit(100)
//     account.deposit(300)
//     account.withdraw(150)
//   })
//
//   afterEach(function() {
//     account.balance = 0
//     account.transactionRecord = []
//   })
//
//   describe("can be printed", function() {
//     it("and accurately displays transaction details", function() {
//       expect(new Print(statement)).toEqual(
//         "date credit debit balance",
//         "18/04/2017 £100 - £100",
//         "18/04/2017 £300 - £400",
//         "18/04/2017 - £150 £250"
//       )
//     })
//   })
// })
