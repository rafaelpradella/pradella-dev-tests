import { pipe, flow } from 'fp-ts/function';
import * as A from 'fp-ts/Array';

// IMPERATIVE WAY
// MUTATIONS, FOR LOOP OBFUSCATING LOGIC
const loopSumToHighestValue = (arr1: number[], arr2: number[]): number => {
    const n = Math.min(arr1.length, arr2.length);
    let total = 0;

    for (let i=0; i<n; i++){
        total += Math.max(arr1[i], arr2[i]);
    }

    return total;
}
loopSumToHighestValue([1,5,9], [9,12,5])

// NAIVE (MY WAY, BTW) FP
// NO MUTATIONS, BUT A LOT OF TS ANNOTATIONS
const sumToHighestValue = (arr1: number[], arr2: number[]): number => {
    const zipped = A.zip(arr1)(arr2);
    const maxxed = A.map((pair: number[]) => Math.max(...pair))(zipped);
    const summed = A.reduce(0, (a: number, b: number) => a + b)(maxxed);
    return summed;
}
sumToHighestValue([1,5,9], [9,12,5])

// FP-TS FULL-THROTTLE
const getHighestValueThenSum = (arr1: number[], arr2: number[]): number => {
    return pipe(
        arr1,
        A.zip(arr2),
        A.map(pair => Math.max(...pair)),
        A.reduce(0, (a, b) => a + b),
    );
}
getHighestValueThenSum([1,5,9], [9,12,5])

// IS THIS WRONG THO?
// A LITTLE BIT MORE ANNOTATIONS, BUT CLEARER?
const sumListItems = (list: number[]) => list.reduce((a, b) => a + b, 0);

const pipeAndExternalFunctions = (arr1: number[], arr2: number[]): number => {
    return pipe(arr1,
        A.zip(arr2),
        A.map(pair => Math.max(...pair)),
        sumListItems,
    );
}
pipeAndExternalFunctions([1,5,9], [9,12,5])