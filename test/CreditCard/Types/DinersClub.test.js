import DinersClub from '../../../src/CreditCard/Types/DinersClub';
import cardsNumberSets from './Data/cardsNumberSets';

describe('Discover', () => {

    let card;

    beforeEach(() => {
        card = new DinersClub(0);
    });

    it('should return code location', () => {
        expect(card.getCodeLocation()).toEqual(DinersClub.getCodeLocation());
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
