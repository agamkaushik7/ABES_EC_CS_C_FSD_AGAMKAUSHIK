class Student {
    constructor(rollno, name, course, branch) {
        this.rollno = rollno;
        this.name = name;
        this.course = course;
        this.branch = branch;
    }
}

const student1 = new Student(1, "A", "B.Tech", "CSE");
const student2 = new Student(2, "B", "B.Tech", "ECE");

console.log(student1);
console.log(student2);
