function parseCount(parse) {

	let parseNum = Number.parseFloat(parse)

	if (Number.isNaN(parseNum)) {
		throw new Error("Невалидное значение")
	}

	return parseNum
}

function validateCount(parse) {
	try {
		return parseCount(parse)
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || a + c <= b || c + b <= a) {
			throw new Error('Треугольник с такими сторонами не существует')
		}

		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c
	}

	get area() {
		return Number((Math.sqrt((0.5 * this.perimeter) * ((0.5 * this.perimeter) - this.a) * ((0.5 * this.perimeter) - this.b) * ((0.5 * this.perimeter) - this.c))).toFixed(3))

	}

}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует'
			},
			get area() {
				return 'Ошибка! Треугольник не существует'
			}
		}
	}

}