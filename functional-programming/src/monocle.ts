import { Lens, Optional } from 'monocle-ts'

type CurrencyInfo = { label: string, amount: number, tax?: number }
interface User {
    name: string;
    bankAccount: {
        usd: CurrencyInfo,
        eur: CurrencyInfo
    };
};

const user : User = {
    name: 'Bruce',
    bankAccount: {
        usd: {
            label: 'US Dollar',
            amount: 2000
        },
        eur: {
            label: 'euro',
            amount: 300,
            tax: 18
        },
    }
};

const capitalize = (s: string): string => s.substring(0, 1).toUpperCase() + s.substring(1)

const eurLabel = Lens.fromPath<User>()(['bankAccount', 'eur', 'label']);

eurLabel.modify(capitalize);

console.log(eurLabel)
console.log(user);

