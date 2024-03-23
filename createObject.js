const object = {
  name: "Ram",
  age: 22,
  hobbies: ["reading", "games", "coding"],
  greet: function () {
    console.log("Hello Mister");
  },
  socre: { english: 95, maths: 85 },
};
console.log(typeof object);
console.log(object.age);
console.log(object.hobbies[2]);
console.log(object.socre.english);
console.log(object.name);
object.greet();
