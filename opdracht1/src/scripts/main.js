function getTotal() {
  var articles = document.querySelectorAll('#winkelmandje article')
  var subtotal = 0
  articles.forEach((article) => {
    var price = Number(article.querySelector('span').innerHTML)
    var amount = Number(article.querySelector('input').value)
    subtotal += (price * amount)
    replaceSubtotal(subtotal)
  })
  var total = subtotal + 4.99
  total = round(total, 2)
  replaceTotal(total)
}

function round(num, decimals) {
  let multiplier = Math.pow(10, decimals)
  return Math.round(num * multiplier) / multiplier
}

function replaceTotal(total) {
  document.querySelector('#winkelmandje tr:last-child td:last-child').innerHTML = total
}

function replaceSubtotal(subtotal) {
  document.querySelector('#winkelmandje tr:first-child td:last-child').innerHTML = parseFloat(Math.round(subtotal * 100) / 100).toFixed(2)
}

var amounts = document.querySelectorAll('#winkelmandje article input')
var totalAmount = 0

function replaceAmount() {
  amounts = document.querySelectorAll('#winkelmandje article input')
  totalAmount = 0
  amounts.forEach((amount) => {
    totalAmount += Number(amount.value)
  })
  document.querySelector('header span').innerHTML = totalAmount
}
amounts.forEach((amount) => {
  amount.addEventListener('input', function () {
    if (amount.value > 0) {
      getTotal()
      replaceAmount()
    }
  })
  amount.addEventListener('blur', function () {
    if (amount.value == 0 || amount.value >= 90) {
      amount.value = '1'
      getTotal()
      replaceAmount()
    }
  })
})

var products = document.querySelectorAll('#winkelmandje article')

products.forEach((product) => {
  product.querySelector('button').addEventListener('click', function () {
    product.parentElement.removeChild(product)
    getTotal()
    replaceAmount()
  })
})

// var bestellen = document.querySelector('#winkelmandje aside button')
// bestellen.addEventListener('click', function () {
//   document.querySelector('#winkelmandje').classList.add('hidden')
//   document.querySelector('#bestellen').classList.remove('hidden')
// })