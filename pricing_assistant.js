let productName = "Super Duper Water bottle"; // Name of the product

let costPerUnit = 15.00
let basePrice = 30.00
let discountRate = 0.15
let salesTaxRate = 0.05
let fixedmonthlyCosts = 500


let discountedPrice = basePrice * (1 - discountRate)
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate)
let profitPerUnit = finalPriceWithTax - costPerUnit
let breakEvenUnits = Math.ceil(fixedmonthlyCosts / profitPerUnit)
let isProfitablePerUnit = profitPerUnit > 0


console.log(productName)
console.log("Discodunted price (before tax): $" + discountedPrice.toFixed(2))
console.log("Final Price with tax: $" + finalPriceWithTax.toFixed(2))
console.log("Profit per Unit: $" + profitPerUnit.toFixed(2))
console.log("Break-Even Units: " + breakEvenUnits)
console.log("Per-unit Profitability: " + isProfitablePerUnit)