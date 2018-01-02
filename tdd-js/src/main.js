import { union } from 'ramda';
import sum, {sub} from "./utils";

import react from 'react';
import reactDOM from 'react-dom';

const arr1 = [1,1,1,2,2,3,4,5,6,6];
const arr2 = [5,6,6,6,7,8,8,9,9,10,1];
const allArrays = union(arr1, arr2);

console.log(allArrays);
