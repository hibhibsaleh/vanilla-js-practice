function calculator() {
    let firstNum = parseInt(document.getElementById("fNumber").value)
    let secondNum = parseInt(document.getElementById("sNumber").value)
    let solution
    let operation = parseInt(document.getElementById("operation").options.selectedIndex)

    if(operation == 0) {
        solution = firstNum + secondNum
    }
    else if(operation == 1) {
        solution = firstNum - secondNum
    }
    else if(operation == 2) {
        solution = firstNum * secondNum
    }
    else if(operation == 3) {
        solution = firstNum / secondNum
    }

    document.getElementById("answer").innerHTML = solution
    console.log(solution)
}