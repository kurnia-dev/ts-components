import { formatUserName } from '../helpers';

describe('formatUserName', () => {
  it('should return the same name if the length is less than or equal to 8', () => {
    expect(formatUserName('John')).to.equal('John');
  });

  describe('when name is more than 8 characters', () => {
    it('should return the first 8 characters followed by ".." if the name is a single word and longer than 8 characters', () => {
      expect(formatUserName('Alexander')).to.equal('Alexande..');
    });

    describe('when the name is multi word', () => {
      it('should return the first 8 characters of the first word followed by ".." if the first word is more than 8 chars', () => {
        expect(formatUserName('Alexander the Great')).to.equal('Alexande.. G');
      });

      it('should return the first word and the first character of the last word if the first word is less than or equal to 8 characters', () => {
        expect(formatUserName('Lorem Ipsum')).to.equal('Lorem I');
      });
    });
  });
});
