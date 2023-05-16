function number_cardinality(n) {
    return n % 10 === 0 ? "zero"
        : n % 10 === 5 ? "five"
        : n % 2 === 0 && n % 10 !== 0 ? "even"
        : n % 2 !== 0 && n % 10 !== 5 ? "odd"
        : "";
}


console.log(number_cardinality(100));  // Output: zero
console.log(number_cardinality(88));   // Output: even
console.log(number_cardinality(155));  // Output: five
console.log(number_cardinality(99));   // Output: odd

