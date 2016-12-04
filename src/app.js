// @flow
import CreditCardFactory from './CreditCardFactory/CreditCardFactory';
import CreditCard from './CreditCard/CreditCard';
import MasterCard from './CreditCard/Types/MasterCard';
import Visa from './CreditCard/Types/Visa';
import AmericanExpress from './CreditCard/Types/AmericanExpress';
import DinnersClub from './CreditCard/Types/DinnersClub';
import JCB from './CreditCard/Types/JCB';
import MaestroCard from './CreditCard/Types/MaestroCard';

const cards = {
    MasterCard,
    Visa,
    AmericanExpress,
    DinnersClub,
    JCB,
    MaestroCard,
};

export {
    CreditCardFactory,
    CreditCard,
    cards,
};
