class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = type;
	}

	fix() {
		return this.state += this._state * 0.5;
	}

	set state(level) {
		if (level < 0) {
			this._state = 0
		} else if (level > 100) {
			this._state = 100
		} else {
			this._state = level
		}
	}

	get state() {
		return this._state;
	}
}



class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}

		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				return this.books.splice(i, 1)[0]
			}
		}

		return null;
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subjectName) {
		if (mark < 2 || mark > 5) {
			return
		}

		if (!(subjectName in this.marks)) {
			this.marks[subjectName] = []
		}

		this.marks[subjectName].push(mark)

	}


	getAverageBySubject(subjectName) {
		if (!(subjectName in this.marks)) {
			return 0;
		}

		let AverageBySubject = this.marks[subjectName].reduce((sum, mark, index, arr) => {
			sum += mark;
			if (index === arr.length - 1) {
				return sum / arr.length;
			}
			return sum;
		}, 0)

		return AverageBySubject

	}

	getAverage() {
		let subject = Object.keys(this.marks);
		let averMark = subject.reduce((sum, mark, index, arr) => {
			sum += this.getAverageBySubject(mark);
			if (index === arr.length - 1) {
				return sum / arr.length;
			}
			return sum;
		}, 0)

		return averMark;

	}

}