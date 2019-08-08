function countClicks() {
    let startingNumber = document.getElementById("counter").innerHTML
    startingNumber = parseInt(startingNumber)
    startingNumber++
    document.getElementById("counter").innerHTML = startingNumber
}