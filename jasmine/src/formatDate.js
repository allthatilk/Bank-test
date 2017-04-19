'use strict'

;(function(exports) {

  function transactionDate(date =  new Date()) {
    var date = date
    var stringDate = date.toString()
    var dateArray = stringDate.split(" ")
    var month = date.getMonth() + 1

    var dd = dateArray[2]
    var mm = month < 9 ? "0" + month : month
    var yyyy = dateArray[3]

    return dd + "/" + mm + "/"+ yyyy
  }

  exports.transactionDate = transactionDate
})(this)
