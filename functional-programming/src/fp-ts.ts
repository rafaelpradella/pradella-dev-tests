import * as O from 'fp-ts/Option'
import { pipe, flow } from 'fp-ts/lib/function';

const add1 = (num: number): number => num + 1;
const multiply2 = (num: number): number => num * 2;
const appendCatWalkingKeyboard = (stringNum: string | number): string => stringNum + 'aflknçM33333333';

//FP-TS PIPE OPERATOR
const pipeCalc = pipe(5, 
    multiply2, add1, add1, multiply2, add1, add1, multiply2, appendCatWalkingKeyboard
);
pipeCalc

//FP-TS FLOW OPERATOR
const flowCalc = flow(multiply2, add1, add1, multiply2, add1, add1, multiply2, appendCatWalkingKeyboard)(5);
flowCalc

//FP-TS OPTION
interface Fizz { buzz: string }
interface Foo { bar: Fizz };
const foo = { bar: {
    buzz: 'Farofa'
} } as Foo | undefined;

const getBarValue = flow(
    O.fromNullable,
    O.map(({ bar }) => bar),
    O.chain(
      flow(
        O.fromNullable,
        O.map(({ buzz }) => buzz),
      ),
    ),
)

getBarValue(undefined)
getBarValue(foo)