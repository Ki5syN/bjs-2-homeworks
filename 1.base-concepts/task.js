"use strict"
function solveEquation(a, b, c) {
	let arr = [];

	let d = Math.pow(b, 2) - 4 * a * c;

	if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	} else if (d === 0) {
		let x3 = -b / (2 * a)
		arr.push(x3);
	} else {
		arr =arr;
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let transPersent = percent/100;
    let p = transPersent/12;
	let s = amount - contribution;
	let n = countMonths;
	let monthPayment = s * (p + (p / (((1 + p) ** n) - 1)));
    let total = Math.round((monthPayment * n) * 100) / 100;
	
	return total

}