module.exports = function toReadable(number) {
    if (!number) {
        return 'zero';
    }
    let numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    let result = '';
    if ((number % 100 > 0 && number % 100 % 10 === 0) || (number % 10 === 0 && number < 100)) {
        result += numbers[number % 100];
    } else if (number % 100 > 0 && number % 100 < 21) {
        result += numbers[number % 100];
    } else if (number % 100 >= 21 && number % 100 < 100) {
        result += numbers[Math.floor(number % 100 / 10) * 10] + ' ' + numbers[number % 10];
    }

    return number / 100 >= 1 ? (`${numbers[Math.floor(number / 100)]} hundred ${result}`).trim() : result;
}