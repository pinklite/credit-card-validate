// @flow
import CreditCard from '../CreditCard';
import type { Location } from '../CreditCardTypes';

/**
 * DinnersClub
 */
class DinnersClub extends CreditCard {

    /** @inheritdoc */
    constructor(number: string, expire: ?Date, code: ?string) {
        super(number, expire, code);
        this.name = 'Dinners Club';
        this.allowedDigits = DinnersClub.getAllowedDigits();
        this.allowedCodeDigits = DinnersClub.getAllowedCodeDigits();
        this.codeLocation = DinnersClub.getCodeLocation();
        this.startDigits = DinnersClub.getStartDigits();
    }

    /**
     * Get list of digits which can be on begining of card.
     *
     * @returns {[string]} list of digits
     */
    static getStartDigits(): Array<string> {
        return ['300', '301', '302', '303', '304', '305', '309', '36', '38', '39'];
    }

    /**
     * Where is code located?
     *
     * @returns {Location} code location
     */
    static getCodeLocation(): Location {
        return 'back';
    }

    /**
     * How many digits have code?
     *
     * @returns {number} number of digits
     */
    static getAllowedCodeDigits(): number {
        return 3;
    }

    /**
     * Get kist of number of digits that can have credit card number.
     *
     * @returns {[number]} list of number of digits
     */
    static getAllowedDigits(): Array<number> {
        return [14];
    }
}

export default DinnersClub;
