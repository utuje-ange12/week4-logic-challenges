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

