import {
  square
} from "./math.js";
import $ from 'jquery'
square(3)
console.log($)

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}else{
   console.log('Looks like we are in production mode!');
}