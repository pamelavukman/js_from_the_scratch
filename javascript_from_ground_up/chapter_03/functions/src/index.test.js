const {
  printFullName,
  printFullNameFromArrayOfArrays,
  countSpecificCharacter,
  getRandomItemFromArray,
  shuffleMyArray,
} = require('.');

describe('Functions tests', () => {
  test('1. printFullName should return "John Doe"', () => {
    expect(printFullName(['John', 'Doe'])).toEqual('John Doe');
  });

  test('2. printFullName should return ["Julia Robert", "John Doe", ...]', () => {
    expect(
      printFullNameFromArrayOfArrays([
        ['Julia', 'Robert'],
        ['John', 'Doe'],
      ])
    ).toMatchObject(['Julia Robert', 'John Doe']);
  });

  test('3. expect the correct result from countSpecificCharacter', () => {
    expect(
      countSpecificCharacter('Without functions, we fucked up!', 'u')
    ).toEqual(4);
  });

  test('4. getRandomItemFromArray should return random item', () => {
    const testSample = ['John', 'Doe', '3', 'Hello world!', '5'];
    expect(getRandomItemFromArray(testSample)).toMatch(
      new RegExp(testSample.join('|'))
    );
  });

  test('5. shuffleMyArray return shuffled array', () => {
    const testSample = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => num.toString());

    function pick(words) {
      var random = Math.floor(Math.random() * (testSample.length - 1));
      return words[random];
    }

    expect(pick(shuffleMyArray(testSample))).toMatch(
      new RegExp(testSample.join('|'))
    );
  });
});
