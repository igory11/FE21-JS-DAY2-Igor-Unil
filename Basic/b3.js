function ageCalculator(byear) {
    let cyear = new Date().getFullYear();

    return cyear - byear;

}

let result = ageCalculator(1992);

console.log(`You are either ${result} or ${result-1}`);