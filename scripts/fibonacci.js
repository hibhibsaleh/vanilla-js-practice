function fibonacci() {
    document.getElementById("answer").innerHTML = ""
    let nNumber = parseInt(document.getElementById("nNumber").value)
    let solution;

    let a = 0;
    let b = 0;

    let solutions = []

    while(nNumber > 0) {
        solution = a + b;
        nNumber--;

        if(solution === 0) {
            b++;
        }

        a = b;
        b = solution;

        solutions.push(solution)
    }

    solutions.forEach((solution, index) => {
        if (index === 0) {
            document.getElementById("answer").innerHTML += solution
        } else {
            document.getElementById("answer").innerHTML += ", " + solution
        }  
    })
}