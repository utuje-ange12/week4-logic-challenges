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

function isPrime(n) {
    if (n < 2) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true
}
console.log(isPrime(2))   // true
console.log(isPrime(17))  // true
console.log(isPrime(18))  // false
console.log(isPrime(1))   // false
console.log(isPrime(0))   // false
console.log(isPrime(-7))  // false

function printPyramid(rows) {
    for (let r = 1; r <= rows; r++) {
        let line = ""
        for (let s = 0; s < rows - r; s++) line += " "
        for (let k = 0; k < 2 * r - 1; k++) line += "*"
        console.log(line)
    }
}
printPyramid(4)
console.log("--")
printPyramid(1)
console.log("--")
printPyramid(0) // prints nothing

function fibonacci(n) {
    let result = ""
    let prev = 0
    let curr = 1
    for (let i = 0; i < n; i++) {
        result += (i === 0 ? "" : ", ") + prev
        const next = prev + curr
        prev = curr
        curr = next
    }
    return result
}
console.log(fibonacci(8)) // 0, 1, 1, 2, 3, 5, 8, 13
console.log(fibonacci(1)) // 0
console.log(fibonacci(2)) // 0, 1
console.log(fibonacci(0)) // "" (empty)

