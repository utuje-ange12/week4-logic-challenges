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
