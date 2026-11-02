function validatePassword(pw) {
    const errors = []
    const specials = "!@#$%^&*"
    let hasUpper = false, hasLower = false, hasDigit = false, hasSpecial = false, hasSpace = false
    for (let i = 0; i < pw.length; i++) {
        const ch = pw[i]
        if (ch >= "A" && ch <= "Z") hasUpper = true
        else if (ch >= "a" && ch <= "z") hasLower = true
        else if (ch >= "0" && ch <= "9") hasDigit = true
        else if (ch === " ") hasSpace = true
        if (specials.includes(ch)) hasSpecial = true
    }
    if (pw.length < 8) errors.push("Password must be at least 8 characters long")
    if (!hasUpper) errors.push("Password must contain an uppercase letter")
    if (!hasLower) errors.push("Password must contain a lowercase letter")
    if (!hasDigit) errors.push("Password must contain a digit")
    if (!hasSpecial) errors.push("Password must contain a special character (!@#$%^&*)")
    if (hasSpace) errors.push("Password must not contain spaces")
    return { valid: errors.length === 0, errors: errors }
}
console.log(validatePassword("Abcdef1!"))
console.log(validatePassword("abc"))
console.log(validatePassword("Abcdef1! x"))
console.log(validatePassword(""))

function romanNumeral(n) {
    if (!Number.isInteger(n) || n < 1 || n > 3999) return "Invalid"
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let result = ""
    let remaining = n
    for (let i = 0; i < values.length; i++) {
        while (remaining >= values[i]) {
            result += symbols[i]
            remaining -= values[i]
        }
    }
    return result
}
console.log(romanNumeral(1994)) // MCMXCIV
console.log(romanNumeral(4))    // IV
console.log(romanNumeral(3999)) // MMMCMXCIX
console.log(romanNumeral(0))    // Invalid
console.log(romanNumeral(4000)) // Invalid

function nationalIdCheck(id) {
    if (typeof id !== "string" || id.length !== 16) return "ID must have exactly 16 digits"
    for (let i = 0; i < id.length; i++) {
        if (id[i] < "0" || id[i] > "9") return "ID must contain digits only"
    }
    if (id[0] !== "1") return "First digit must be 1"
    const year = Number(id.slice(1, 5))
    const currentYear = new Date().getFullYear()
    if (year < 1900 || year > currentYear) return "Birth year (digits 2-5) must be between 1900 and " + currentYear
    if (id[5] !== "7" && id[5] !== "8") return "Sixth digit must be 7 or 8"
    return true
}
console.log(nationalIdCheck("1199680012345678")) // true
console.log(nationalIdCheck("1199780012345678")) // true (year 1997)
console.log(nationalIdCheck("119968001234567"))  // length message
console.log(nationalIdCheck("2199680012345678")) // first digit
console.log(nationalIdCheck("1189680012345678")) // year 1896
console.log(nationalIdCheck("1199650012345678")) // 6th digit
console.log(nationalIdCheck(""))                 // length message