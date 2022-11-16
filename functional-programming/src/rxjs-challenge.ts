// The task is as follows:
// Once per second (this parameter is configurable and can vary from 300 ms to 30 seconds) an object of the TimeAndSale type arrives from the API
//  Necessary
// 1. Add this object to the beginning of the data array
// 2. The data array stores the data received in the time interval (of the incoming object) - 1 minute
// i.e. something like this [{time: '10: 56: 00 ', ...}, ..., {time: '10: 55: 00', ...}]

import { interval, Observable, throttleTime, of } from "rxjs";
import { map, scan, timeInterval, reduce, takeWhile, tap } from "rxjs/operators";

const INTERVAL_TO_STORE_DATA = 9000;
const DATA_INTERVAL = 3000;

console.log('INIT!');

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const formatTime = (date: Date) =>
    date.toTimeString()?.split(' ')[0];

interface TimeAndSale {
  time: Date;
  price: number;
  sales: number;
}
//const emitDataDelay$ = interval(INTERVAL_TO_STORE_DATA);
const data$: Observable<TimeAndSale> = interval(DATA_INTERVAL).pipe(
  map(() => ({
    time: new Date(),
    price: random(100, 300),
    sales: random(1, 100)
  })
))

data$.pipe(
    map(({ time, ...data }: TimeAndSale) => ({ time: formatTime(time), ...data })),
    scan((acc, res) => ([res, ...acc]), []),
    throttleTime(INTERVAL_TO_STORE_DATA),
).subscribe(console.log)

/*data$.pipe(
    map(({ time, ...data }) => ({ time: formatTime(time), ...data })),
    timeInterval(),
    tap(console.log),
    reduce((acc, res) => {
        if(res.interval > INTERVAL_TO_STORE_DATA) acc = [];

        return { 
            value: [res.value, ...acc],
            interval: res.interval
        };
    }, []),
    tap(console.log),
    takeWhile(({ interval }) => interval > INTERVAL_TO_STORE_DATA),
).subscribe(console.log)*/