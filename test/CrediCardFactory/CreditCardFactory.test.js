import CreditCardFactory from '../../src/CreditCardFactory/CreditCardFactory';
import CreditCard from '../../src/CreditCard/CreditCard';

class CreditCard1 extends CreditCard {
    constructor(number, expire, code) {
        super(number, expire, code);
        this.name = 'Credit card 1';
        this.startDigits = CreditCard1.getStartDigits();
    }

    static getStartDigits(): Array<string> {
        return ['45'];
    }
}

class CreditCard2 extends CreditCard {
    constructor(number, expire, code) {
        super(number, expire, code);
        this.name = 'Credit card 2';
        this.startDigits = CreditCard2.getStartDigits();
    }

    static getStartDigits(): Array<string> {
        return ['44'];
    }
}

describe('Test base credit card', () => {

    const creditCardFactory = new CreditCardFactory([CreditCard1, CreditCard2]);

    it('should return array of matched credit cards', () => {
        expect(creditCardFactory.find('4')).toEqual([
            jasmine.any(CreditCard1),
            jasmine.any(CreditCard2),
        ]);

        expect(creditCardFactory.find('454')).toEqual([
            jasmine.any(CreditCard1),
        ]);
    });

    it('should return empty array on no match', () => {
        expect(creditCardFactory.find('3')).toEqual([]);
    });
});
