import * as _ from "lodash/";
import {outlog} from "./common";
import "../styles/style.css";
import "../styles/scss.scss";
import webpackImage from '../images/webpack1.jpg'
import data from '../data.json';
import {render} from 'react-dom';
import React from "react";
import App from './components/App';

render(<App />, document.getElementById('root'));

outlog('My log');

function sayHello(name: string) {
	return `hello ${name}`
}

console.log(sayHello('rick'));

declare const window: any;
// let the functions be the window properties
window.sayHello = sayHello;
window.outlog = outlog;

const rickHuangRecipe = {
	leatherString: 2,
	ironIngot: 1,
	refinedMoonstone: 3
};

const leoHuangReceipe = {
	...rickHuangRecipe,
	leather: 1,
	refinedMoonstone: 4
}
console.log(rickHuangRecipe);
console.log(leoHuangReceipe);

function myComponent() {
	const element = document.createElement('div');
	element.innerHTML = '<h1>my HTML content!</h1>';
	element.innerHTML += _.join(['rick ', 'is ', 'good ', 'man ', 'haha'], '--');
	element.classList.add('my-class')
	const myImg = new Image();
	myImg.src = webpackImage;
	myImg.height = 600;
	element.appendChild(myImg);

	data.forEach((item: {name: string, price: number}) => {
		element.innerHTML += `<h2>${item.name}: ${item.price}</h2>`
	});

	return element
}

document.body.appendChild(myComponent());

