import '@babel/polyfill';
import hello from './hello';
import world from './world';
import css from './style.css';

document.querySelector('#root').innerHTML = world + ' ' + hello;
console.log('css', css);
