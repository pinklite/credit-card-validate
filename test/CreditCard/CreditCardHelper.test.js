import CreditCardHelper from '../../src/CreditCard/CreditCardHelper';

describe('Test CreditCardHelper', () => {

    it('should validate luhn', () => {
        [
            '340686230085818',
            '379547639699753',
            '375777988594495',
            '341684656202081',
            '340886941421696',
            '370487965813174',
        ].forEach((number) => {
            expect(CreditCardHelper.validateLuhn(number)).toEqual(true);
        });
    });

    it('should detect beginig of card', () => {
        expect(CreditCardHelper.isNumberBeginMatch('52432423', ['5'])).toEqual(true);
        expect(CreditCardHelper.isNumberBeginMatch('52432423', ['52'])).toEqual(true);
        expect(CreditCardHelper.isNumberBeginMatch('52432423', ['525'])).toEqual(false);
    });
});
