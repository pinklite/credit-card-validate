import CreditCard from '../../src/CreditCard/CreditCard';

describe('Test base credit card', () => {

    it('should create credit card', () => {
        const number = '4111111111111111';
        const expire = new Date('2017-11');
        const code = '123';
        const card = new CreditCard(number, expire, code);
        expect(card.getNumber()).toEqual(number);
        expect(card.getExpire().getFullYear()).toEqual(expire.getFullYear());
        expect(card.getExpire().getMonth()).toEqual(expire.getMonth());
        expect(card.getCode()).toEqual(code);
    });

    it('should resolve past date as expired', () => {
        // set current date as september 2013
        jasmine.clock().mockDate(new Date('2013-09-05'));
        expect((new CreditCard('1', new Date('2010-01'))).isExpired()).toEqual(true);
        expect((new CreditCard('1', new Date('2013-08'))).isExpired()).toEqual(true);
        expect((new CreditCard('1', new Date('2013-06'))).isExpired()).toEqual(true);
    });

    it('should resolve future date as non expired', () => {
        // set current date as september 2013
        jasmine.clock().mockDate(new Date('2013-09-05'));
        expect((new CreditCard('1', new Date('2013-09'))).isExpired()).toEqual(false);
        expect((new CreditCard('1', new Date('2015-09'))).isExpired()).toEqual(false);
    });

    it('should throw exception on check expiry', () => {
        expect(() => {(new CreditCard('5')).isExpired()})
            .toThrowError('Expire date information is missing.');
    });

    it('should check number of digits on code', () => {
        const card = new CreditCard('1', new Date(), '1');
        card.allowedCodeDigits = 2;
        expect(card.isNumberOfCodeDigitsValid()).toEqual(false);
        card.setCode('22');
        expect(card.isNumberOfCodeDigitsValid()).toEqual(true);
    });

    it('should throw exception on check code length', () => {
        expect(() => {(new CreditCard('5')).isNumberOfCodeDigitsValid()})
            .toThrowError('Card card code information is missing.');
    });

    it('check validity of all properties', () => {
        jasmine.clock().mockDate(new Date('2013-09-05'));
        const card = new CreditCard('4111111111111111', new Date('2015-10'), '210');
        card.allowedCodeDigits = 3;
        card.startDigits = ['4'];
        card.allowedDigits = [16];
        expect(card.isValid()).toEqual(true);
    });
});
