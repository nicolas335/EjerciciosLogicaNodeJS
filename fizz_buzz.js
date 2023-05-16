function fizz_buzz(n) {

    let array = Array(n).fill();

    return array.map((_, i) =>
        (
            (i + 1) % 3 === 0 && (i + 1) % 5 !== 0 ? "Fizz" :
            (i + 1) % 5 === 0 && (i + 1) % 3 !== 0 ? "Buzz" :
            (i + 1) % 3 === 0 && (i + 1) % 5 === 0 ? "FizzBuzz" :
            i + 1
        )
    );
}

console.log(fizz_buzz(15));
