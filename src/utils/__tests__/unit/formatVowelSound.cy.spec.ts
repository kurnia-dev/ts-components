import { formatVowelSoundLabel } from '../../textFormater.util';

describe('formatVowelSoundLabel', () => {
  describe('should return a', () => {
    const testCases = [
      'banana',
      'grape',
      'user',
      'cat',
      'dog',
      'car',
      'tree',
      'book',
      'table',
      'chair',
      'pen',
      'pencil',
      'computer',
      'phone',
      'cup',
      'bottle',
      'bag',
      'shoe',
      'hat',
      'shirt',
      'unicorn',
      'universe',
      'ball',
      'game',
      'fruit',
      'vegetable',
      'meat',
      'fish',
      'chicken',
      'beef',
      'pork',
      'lamb',
      'duck',
      'turkey',
      'goose',
      'quail',
      'pigeon',
      'rabbit',
      'deer',
      'buffalo',
      'cow',
      'goat',
      'sheep',
      'horse',
      'donkey',
      'camel',
      'lion',
      'tiger',
      'leopard',
      'cheetah',
      'jaguar',
      'panther',
      'puma',
      'cougar',
      'lynx',
      'bobcat',
      'horrifying',
      'horrific',
    ];

    testCases.forEach((testCase) => {
      it(`should return "a ${testCase}" when label is "${testCase}"`, () => {
        cy.wrap(formatVowelSoundLabel(testCase)).should(
          'equal',
          `a ${testCase}`,
        );
      });
    });
  });

  describe('should return an', () => {
    const testCases = [
      'apple',
      'orange',
      'hour',
      'honest',
      'umbrella',
      'elephant',
      'eagle',
      'ice',
      'island',
      'ocean',
      'oven',
      'honor',
      'honesty',
      'heir',
      'heirloom',
      'ant',
      'eel',
      'iguana',
      'otter',
      'urchin',
      'emu',
      'octopus',
      'eel',
      'asteroid',
      'echo',
      'idea',
      'opera',
      'umbrella',
      'astronaut',
      'engineer',
      'artist',
      'actor',
      'illustrator',
      'organist',
      'umpire',
      'astronomer',
      'entomologist',
      'architect',
      'author',
      'illustration',
      'operation',
      'understanding',
      'astronomy',
      'entomology',
      'architecture',
      'authority',
      'illusion',
      'opposition',
      'understatement',
      'honorific',
    ];

    testCases.forEach((testCase) => {
      it(`should return "an ${testCase}" when label is "${testCase}"`, () => {
        cy.wrap(formatVowelSoundLabel(testCase)).should(
          'equal',
          `an ${testCase}`,
        );
      });
    });
  });

  it('should return empty string if label is not provided', () => {
    cy.wrap(formatVowelSoundLabel()).should('equal', '');
  });
});
