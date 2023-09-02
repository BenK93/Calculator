
// create function thar is printing all prime numbers between 0 and 1000
function printPrimeNumbers() {
    for (let i = 0; i <= 1000; i++) {
        if (isPrime(i)) {
        console.log(i);
        }
    }
}

// create function that is checking if number is prime
function isPrime(num: number) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return true;
    }
    return true;
}