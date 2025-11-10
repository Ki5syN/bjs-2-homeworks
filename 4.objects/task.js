function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.isExluded) {
		return
	}
    
	this.marks.push(...marks)
}

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}

	this.averageMark = this.marks.reduce((sum, mark, index, arr) => {
		sum += mark;
		if (index === arr.length - 1) {
			return sum / arr.length;
		}
		return sum;
	}, 0)

	return this.averageMark

}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
	this.isExluded = true;
}