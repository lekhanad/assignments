class Student {
  constructor(id, name, course) {
    this.id = id;
    this.name = name;
    this.course = course;
  }
  printDetails() {
    console.log(`Student ${this.name} is studies ${this.course} course `);
  }
}

const student1 = new Student(1, "samuel", "B.Tech");

student1.printDetails();

const oddNumbers = [1, 3, 5];
const evenNumbers = [2, 4, 6];

const allNumbers = [...oddNumbers, 9, 10, ...evenNumbers];
console.log(allNumbers);
