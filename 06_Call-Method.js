// call() is a method available on functions that allows you to invoke the function immediately, while explicitly specifying the value of this and passing in arguments individually.

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
let fullName =   person.fullName.call(person1);
console.log(fullName)