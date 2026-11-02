// ROUND 2 - Strings (2 points each)

function reverseString(str) {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}
console.log(reverseString("hello")) // olleh
console.log(reverseString("a"))     // a
console.log(reverseString(""))      // "" (empty)

function countChar(str, char) {
    const text = str.toLowerCase()
    const target = char.toLowerCase()
    let count = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] === target) count++
    }
    return count
}
console.log(countChar("Banana", "a")) // 3
console.log(countChar("Kigali", "K")) // 1
console.log(countChar("", "a"))       // 0