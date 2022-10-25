type InteractionsType = 'levantamento' | 'multibanco' | 'moeda' | 'empréstimo';
interface BankInteractions { amount: number, id: InteractionsType };

const originalArray: BankInteractions[] = [
    { amount: 200, id: 'levantamento' },
    { amount: 600, id: 'multibanco'},
    { amount: 2900, id: 'multibanco'},
    { amount: 10, id: 'moeda'},
];

const customFilter = ((source: BankInteractions[], verifier: (arg0: unknown) => boolean) => {
    return source.reduce((ref, current) => {
        return (verifier(current)) ? ref.concat(current) : ref;    
    }, [])
});

/* const multibancoOnly = originalArray.reduce((ref, current) => {
    (current.id === 'multibanco') ? ref.concat(current) : ref;
}, []) */

const multibancoOnly = customFilter(originalArray, (item) => item.id === 'multibanco');

const fullAmount = originalArray.reduce((ref, current) => ref + current.amount, 0)

const getArrayIds = originalArray.reduce((ref, current) => ref.concat([{ id: current.id }]), [])

multibancoOnly;
fullAmount;
getArrayIds;