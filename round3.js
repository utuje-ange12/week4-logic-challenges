// ROUND 3 - Loops & patterns (3 points each)

function sumTo(n) {
    let total = 0
    for (let i = 1; i <= n; i++) total += i
    return total
}
function sumToFormula(n) {
    if (n <= 0) return 0
    return (n * (n + 1)) / 2
}
console.log(sumTo(5), sumToFormula(5))       // 15 15
console.log(sumTo(100), sumToFormula(100))   // 5050 5050
console.log(sumTo(0), sumToFormula(0))       // 0 0
console.log(sumTo(-3), sumToFormula(-3))     // 0 0
console.log("match:", sumTo(1000) === sumToFormula(1000)) // true

