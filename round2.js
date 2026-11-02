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

function titleCase(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === " ") {
            result += str[i].toUpperCase()
        } else {
            result += str[i].toLowerCase()
        }
    }
    return result
}
console.log(titleCase("welcome to kigali tech hub")) // Welcome To Kigali Tech Hub
console.log(titleCase("hELLO wORLD"))                // Hello World
console.log(titleCase(""))                           // "" (empty)
function maskPhone(phone) {
    if (typeof phone !== "string" || phone.length !== 10) return "Invalid"
    if (phone[0] !== "0" || phone[1] !== "7") return "Invalid"
    for (let i = 0; i < phone.length; i++) {
        if (phone[i] < "0" || phone[i] > "9") return "Invalid"
    }
    return phone.slice(0, 3) + "****" + phone.slice(7)
}
console.log(maskPhone("0788123456")) // 078****456
console.log(maskPhone("0688123456")) // Invalid
console.log(maskPhone("078812345"))  // Invalid
console.log(maskPhone("07881234ab")) // Invalid

function longestWord(sentence) {
    let best = ""
    let current = ""
    for (let i = 0; i <= sentence.length; i++) {
        const ch = sentence[i]
        if (i === sentence.length || ch === " ") {
            if (current.length > best.length) best = current
            current = ""
        } else {
            current += ch
        }
    }
    return best
}
console.log(longestWord("I love Kigali tech")) // Kigali
console.log(longestWord("aa bb cc"))           // aa
console.log(longestWord(""))                   // "" (empty)
console.log(longestWord("  spaced   out  "))   // spaced

function compress(str) {
    if (str === "") return ""
    let result = ""
    let currentChar = str[0]
    let count = 1
    for (let i = 1; i < str.length; i++) {
        if (str[i] === currentChar) {
            count++
        } else {
            result += currentChar + count
            currentChar = str[i]
            count = 1
        }
    }
    result += currentChar + count
    return result
}
console.log(compress("aaabccdddd")) // a3b1c2d4
console.log(compress("a"))          // a1
console.log(compress(""))           // "" (empty)


