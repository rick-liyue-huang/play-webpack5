import * as _ from "lodash/";
import {outlog} from "./common";
import "../styles/style.css";
import "../styles/scss.scss";
import webpackImage from '../images/webpack1.jpg'
import data from '../data.json';
// import {data} from '../data';


outlog('My log');

function sayHello(name: string) {
	return `hello ${name}`
}

console.log(sayHello('rick'));

declare const window: any;
// let the functions be the window properties
window.sayHello = sayHello;
window.outlog = outlog;

function myComponent() {
	const element = document.createElement('div');
	element.innerHTML = '<h1>my HTML content!</h1>';
	element.innerHTML += _.join(['rick ', 'is ', 'good ', 'man ', 'haha'], '--');
	element.classList.add('my-class')
	const myImg = new Image();
	myImg.src = webpackImage;
	element.appendChild(myImg);

	data.forEach((item: {name: string, price: number}) => {
		element.innerHTML += `<h2>${item.name}: ${item.price}</h2>`
	});

	return element
}

document.body.appendChild(myComponent());

