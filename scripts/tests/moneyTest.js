import { formatCurrency } from "../utils/money.js";

console.log('test suite: format currency');

console.log('Convert cents in to dollars ');

if (formatCurrency(2095) === '20.95') {
    console.log('passed');
}else {
    console.log('failed')
}

console.log('works with zero')

if (formatCurrency(0) === '0.00') {
    console.log('passed');
}else {
    console.log('failed')
}

console.log('rounds up to the nearest cent')

if (formatCurrency(2095) === '20.95') {
    console.log('passed');
}else {
    console.log('failed')
}


    console.log('Works with zero')
    console.log(formatCurrency(0));

    console.log('Works with negative numbers')
    console.log(formatCurrency(-100));
