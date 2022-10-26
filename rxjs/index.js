const { Observable, map, pluck} = require('rxjs');

const users = {
  data: [
    { status: 'active', age: 12 },
    { status: 'active', age: 25 },
    { status: 'inactive', age: 37 },
    { status: 'active', age: 13 },
  ]
}

const observable = new Observable((subscriber) => {
  subscriber.next(users);
}).pipe(
  /*pluck("data") Deprecated in v8 */
  map((value) => value.data),
  map(value => value.filter((res) => res?.status === 'active')),
  map(value => 
    value.reduce((sum, user) =>  sum + user.age, 0) / value.length
  ),
  map(age => (age < 18) ? new Error(`Average age is ${age}. Expected min. 18`) : age )
)

const observer = {
  next: (value) => { console.log('Observer got a value', value)},
  error: (error) => { console.error(error) },
  complete: () => { console.log('Observer got complete 😌')}
}

observable.subscribe(observer);