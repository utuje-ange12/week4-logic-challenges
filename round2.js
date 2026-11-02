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

function isPalindrome(str) {
    let cleaned = ""
    for (let i = 0; i < str.length; i++) {
        const ch = str[i].toLowerCase()
        const isLetter = ch >= "a" && ch <= "z"
        const isDigit = ch >= "0" && ch <= "9"
        if (isLetter || isDigit) cleaned += ch
    }
    let left = 0
    let right = cleaned.length - 1
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false
        left++
        right--
    }
    return true
}
console.log(isPalindrome("Never odd or even"))                 // true
console.log(isPalindrome("hello"))                             // false
console.log(isPalindrome(""))                                  // true
console.log(isPalindrome("A man, a plan, a canal: Panama"))