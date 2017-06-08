const expect = require('expect');

const numerals = {
	1: 'I',
	4: 'IV',
	5: 'V',
	9: 'IX',
	10: 'X',
	40: 'XL',
	50: 'L',
	90: 'XC',
	100: 'C',
	400: 'CD',
	500: 'D',
	900: 'CM',
	1000: 'M'
}

function numeralize(num) {
	const divisors = Object.keys(numerals);
	let di = divisors.length - 1;
	let result = [];

	while (num > 0) {
		if (num < divisors[di]) {
			di--;
		} else {
			const divisor = divisors[di];
			result.push(numerals[divisor]);
			num -= divisor;
		}
	}
	return result.join('');
}

// Some tests using expect library: https://github.com/mjackson/expect
expect(numeralize(1)).toEqual('I');
expect(numeralize(2)).toEqual('II');
expect(numeralize(3)).toEqual('III');
expect(numeralize(4)).toEqual('IV');
expect(numeralize(5)).toEqual('V');
expect(numeralize(9)).toEqual('IX');
expect(numeralize(13)).toEqual('XIII');
expect(numeralize(14)).toEqual('XIV');
expect(numeralize(29)).toEqual('XXIX');
expect(numeralize(44)).toEqual('XLIV');
expect(numeralize(45)).toEqual('XLV');
expect(numeralize(68)).toEqual('LXVIII');
expect(numeralize(83)).toEqual('LXXXIII');
expect(numeralize(99)).toEqual('XCIX');
expect(numeralize(400)).toEqual('CD');
expect(numeralize(500)).toEqual('D');
expect(numeralize(501)).toEqual('DI');
expect(numeralize(3999)).toEqual('MMMCMXCIX');
console.log('All tests passed!');
