import { flow } from 'fp-ts/function';

interface Person { name: string }

/* CUSTOM PIPE LOGIC
const pipe = (...fns) => {
    console.log(fns);
    return (data) => fns.reduce((initialData, fn) => fn(initialData), data)
}
*/

const getName = (person: Person): string => person?.name;

const uppercase = (text: string) => text.toUpperCase();

const get6Chars = (text: string) => text.substring(0,6);

const reverse = (text: string) => text.split('').reverse().join('');

const distortedName = flow(
    getName,
    uppercase,
    get6Chars,
    reverse,
)({ name: 'monica berverly hills' });

distortedName