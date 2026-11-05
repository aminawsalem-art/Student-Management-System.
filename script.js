// 1. Create Student Class
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // 2. Calculate Average using reduce
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // 3. Calculate Grade
    getGrade() {
        let average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // 4. Final Result
    getResult() {
        if (this.calculateAverage() >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// 5. Create Students Objects
let studentsList = [
    new Student(101, "Ahmed", [90, 85, 95], 90),
    new Student(102, "Mona", [45, 48, 42], 80),
    new Student(103, "Ali", [40, 45, 48], 70),
    new Student(104, "Sara", [70, 75, 80], 95)
];

// 6. Extract Students who need Mercy Grades
let strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// 7. Add 5 Mercy Marks using map
let mercyStudents = strugglingStudents.map(student => {
    let oldAverage = student.calculateAverage();
    let newAverage = oldAverage + 5;

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: newAverage
    };
});

// 8. Calculate Total New Averages using reduce
let totalNewAverages = mercyStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// 9. Calculate Mercy Average with Zero Protection
let mercyAverage = mercyStudents.length > 0
    ? totalNewAverages / mercyStudents.length
    : 0;

// 10. Print Students Reports
console.log("===== Students Reports =====");

studentsList.forEach(student => {
    console.log("--------------------");
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage().toFixed(2));
    console.log("Grade:", student.getGrade());
    console.log("Result:", student.getResult());
});

// 11. Print Mercy Students
console.log("===== Mercy Students =====");
console.log(mercyStudents);

// 12. Print Mercy Average
console.log("Mercy Average:", mercyAverage.toFixed(2));