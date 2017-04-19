// 3 is 04 here and 11 is 12 because of how months are counted in the default
// and for current functionality injection is only needed for tests as
// transactions will only need the current default date object

describe("Formatted Date", function() {
  describe("is returned in the desired format", function() {
    it("when month is a single digit", function() {
      expect(transactionDate(new Date(2017, 3, 17))).toEqual("17/04/2017")
    })
    it("when month is a double digit", function() {
      expect(transactionDate(new Date(2017, 11, 17))).toEqual("17/12/2017")
    })
  })
})
