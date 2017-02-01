var expect = require('expect');

function numeralize(num) {
   var ds = [
    {
      name: 'M',
      value: 1000
    },
    {
      name: 'D',
      value: 500
    },
    {
      name: 'C',
      value: 100
    },
    {
      name: 'L',
      value: 50
    },
    {
      name: 'X',
      value: 10
    },
    {
      name: 'V',
      value: 5
    },
    {
      name: 'I',
      value: 1
    }
  ];
  var di = 0;
  var n = num;
  var result = '';
  while (n != 0) {
    var d = ds[di];
    if (d.value <= n) {
      if ( di % 2 == 1 && di > 0 && di < ds.length - 1) {
        if ( n >= (ds[di - 1].value - ds[di + 1].value)) {
          result = result + ds[di + 1].name + ds[di - 1].name;
          n = n % (ds[di - 1].value - ds[di + 1].value);
        } else {
          var np = Math.floor(n / d.value);
        	result = result + d.name.repeat(np);
        	n = n % d.value;
        }
      } else if ( di % 2 == 0 && di > 0) {
        console.log(ds[di - 1]);
        if ( n >= (ds[di - 1].value - d.value) ) {
          result = result + d.name + ds[di - 1].name;
          n = n % (ds[di - 1].value - d.value);
        } else {
          var np = Math.floor(n / d.value);
        	result = result + d.name.repeat(np);
        	n = n % d.value;
        }
      } else {
        var np = Math.floor(n / d.value);
       	result = result + d.name.repeat(np);
       	n = n % d.value;
      }
    }
    di++;
  }
  return result;
}

// Some tests using expect library: https://github.com/mjackson/expect 
expect(numeralize(1)).toEqual('I');
expect(numeralize(2)).toEqual('II');
expect(numeralize(3)).toEqual('III');
expect(numeralize(5)).toEqual('V');
expect(numeralize(9)).toEqual('IX');
expect(numeralize(12)).toEqual('XII');
expect(numeralize(16)).toEqual('XVI');
expect(numeralize(29)).toEqual('XXIX');
expect(numeralize(44)).toEqual('XLIV');
expect(numeralize(45)).toEqual('XLV');
expect(numeralize(68)).toEqual('LXVIII');
expect(numeralize(83)).toEqual('LXXXIII');
expect(numeralize(99)).toEqual('XCIX');
expect(numeralize(500)).toEqual('D');
expect(numeralize(501)).toEqual('DI');
expect(numeralize(3999)).toEqual('MMMCMXCIX');

