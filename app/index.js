console.log("Welcome to Webpack build");

// JS closure at closest!!

const budget = () => {
    let balance = 0;

    let changeBal = (amount) => {
        return balance += amount;
    }
    const deposit20 = () => changeBal(20);
    const checkBalance = () => balance;
    const draw20 = () => changeBal(-20);
    return {
        deposit20,
        checkBalance,
        draw20
    }
}

let wallet = budget();

console.log(wallet);
wallet.deposit20();
console.log(wallet.checkBalance());
wallet.draw20();
console.log(wallet.checkBalance());

//Generators

//Breaks of tradition run to completion model
//We can have a callback anytime of the processing steps of the function
//So generaters can pass in the middle, yield, pause, resume and next()
//function* printLetters() {
//    yield 'a';
//    yield 'b';
//}
//let letter = printLetters();

//console.log(letter.next().value);
//console.log(letter.next().value);
