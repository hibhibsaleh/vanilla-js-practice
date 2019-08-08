function reverseHeader() {
    let wordToReverse = document.getElementById("reverseMe").innerHTML
    let reversedString = reverseString(wordToReverse)
    document.getElementById("reverseMe").innerHTML = reversedString
    console.log(reversedString)
}

function reverseString(str) {
    let splittedString = str.split("")
    let reverseString = splittedString.reverse()
    return reverseString.join("")
}