class User {
  #internal = true;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  getName() {
    return this.name;
  }

  printUser() {
    console.log(`${this.getName()} ${this.getAge()}`);
    console.log(this.#internal);
  }
}

class Admin extends User {
  constructor(name, age, isAdmin) {
    super(name, age);
    this.isAdmin = isAdmin;
  }

  printUser() {
    console.log(`${this.name} ${this.age} ${this.isAdmin}`);
  }
}

const ram = new User("ram", 22);
const shyam = new User("shyam", 20);

ram.printUser();
shyam.printUser();

const harsh = new Admin("harsh", 19, true);

harsh.isAdmin;
harsh.name;
harsh.age;
harsh.getAge();
harsh.getName();
harsh.printUser();
