const teacher = {
    name: "Ram",
    age: 22,
    hobbies: ["reading", "games", "coding"],
    greet: function () {
      console.log("Hello Mister");
    },
    socre: { english: 95, maths: 85 },
  };
  delete teacher.hobbies;
  delete teacher.greet;
  console.log(teacher)
  