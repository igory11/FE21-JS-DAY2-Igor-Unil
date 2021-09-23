function ATM() {

    let amount = prompt('Enter the amount of money you would like to withdraw');
    let b100 = Math.floor(amount / 100);
    let r = amount % 100;
    let b50 = Math.floor(r / 50);
    r = r % 50;
    let b20 = Math.floor(r / 20);
    r = r % 20;
    let b10 = Math.floor(r / 10);

    return [b100, b50, b20, b10]

}

console.log(ATM[0], ATM[1], ATM[2], ATM[3])