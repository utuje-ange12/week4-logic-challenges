
function isLeapYear(year) {
    if (year % 400 === 0) return true
    if (year % 100 === 0) return false
    return year % 4 === 0
}
console.log(isLeapYear(2024)) // true
console.log(isLeapYear(1900)) // false
console.log(isLeapYear(2000)) // true
console.log(isLeapYear(2023)) // false


function getBMICategory(weightKg, heightM) {
    if (heightM <= 0 || weightKg <= 0) return "Invalid input"
    const bmi = weightKg / (heightM * heightM)
    if (bmi < 18.5) return "Underweight"
    if (bmi < 25) return "Normal"
    if (bmi < 30) return "Overweight"
    return "Obese"
}
console.log(getBMICategory(50, 1.8))  // Underweight
console.log(getBMICategory(70, 1.75)) // Normal
console.log(getBMICategory(85, 1.75)) // Overweight
console.log(getBMICategory(100, 1.7)) // Obese
console.log(getBMICategory(70, 0))    // Invalid input


function motoFare(km) {
    if (km <= 0) return 0
    if (km <= 2) return 300
    const extraKm = Math.ceil(km - 2)
    return 300 + extraKm * 107
}
console.log(motoFare(1))   // 300
console.log(motoFare(3))   // 407
console.log(motoFare(2.5)) // 407
console.log(motoFare(0))   // 0
console.log(motoFare(-4))  // 0


function convertSeconds(total) {
    const hours = Math.floor(total / 3600)
    const minutes = Math.floor((total % 3600) / 60)
    const seconds = total % 60
    return hours + "h " + String(minutes).padStart(2, "0") + "m " + String(seconds).padStart(2, "0") + "s"
}
console.log(convertSeconds(7509)) // 2h 05m 09s
console.log(convertSeconds(59))   // 0h 00m 59s
console.log(convertSeconds(0))    // 0h 00m 00s
console.log(convertSeconds(3600)) // 1h 00m 00s


function changeMaker(amount) {
    const denominations = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1]
    let remaining = amount
    const result = []
    for (let i = 0; i < denominations.length; i++) {
        const count = Math.floor(remaining / denominations[i])
        if (count > 0) {
            console.log(count + "×" + denominations[i])
            result.push(count + "×" + denominations[i])
            remaining -= count * denominations[i]
        }
    }
    return result
}
changeMaker(7385)
console.log("---")
changeMaker(5000)
console.log("---")
changeMaker(0) // prints nothing
console.log("--- 99:")
changeMaker(99)