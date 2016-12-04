import Visa from '../../../src/CreditCard/Types/Visa';
import cardsNumberSets from './Data/cardsNumberSets';

describe('Visa', () => {

    let card;

    beforeEach(() => {
        card = new Visa(0);
    });

    it('should return code location', () => {
        expect(card.getCodeLocation()).toEqual(Visa.getCodeLocation());
    });

    it('should get name', () => {
        expect(card.getName()).toEqual(jasmine.any(String));
    });

    it('should validate numbers', () => {
        cardsNumberSets.forEach((set) => {
            const shouldBeValid = set.name === card.getName();
            set.data.forEach((cardData) => {
                card.setNumber(cardData.CreditCard.CardNumber.toString());
                const isValid = card.isNumberOfDigitsValid()
                    && card.isCardTypeValid()
                    && card.isLuhnValid();
                if (isValid !== shouldBeValid) {
                    console.log('Number ' + card.getNumber() + ' from ' + set.name + ' set should ' + (shouldBeValid ? '' : 'not') + ' be valid');
                }

                expect(isValid).toEqual(shouldBeValid);
            });
        });
    });
});
