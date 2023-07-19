console.log('Connected and ready!');

function printNumbers(x) {
    let array = [];
    for (let i = 0; i < x + 1; i++) {
        if (i % 2 == 0) {
            array.push(i);
        }

    }
    console.log('Even numbers:' + array);
}

printNumbers(50);


function fibonacciNumbers(x) {
    let number1 = 0;
    let number2 = 1;
    let array = [0,1];

    for (let i = 0; i < x; i++) {
        let next_number = number1 + number2;
        number1 = number2;
        number2 = next_number;
        array.push(next_number);
    }

    console.log('Fibonacci numbers:' + array)
}

fibonacciNumbers(5);