// // // Person constructor
// // function Person(name, dob) {
// //   this.name = name;
// //   // this.age = age;
// //   this.birthday = new Date(dob);
// //   this.calculateAge = function(){
// //     const diff =  Date.now() - this.birthday.getTime();
// //     const ageDate = new Date(diff);
// //     return Math.abs(ageDate.getUTCFullYear() - 1970);
// //   }
// // }

// // // const brad = new Person('Brad', 36);
// // // const john = new Person('John', 30);

// // // console.log(john.age);

// // const brad = new Person('Brad', '9-10-1981');
// // console.log(brad.calculateAge());

// function Person(name, dob){
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return  Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }
// // const brad = new Person('Brad', 45);
// // const john = new Person('John', 45);
// // const doe = new Person('Doe', 45);
// const Doe = new Person('doe', '9-10-1981')
// console.log(Doe.calculateAge());


// const name1 = 'jeff';
// const name2 = new String('jeff');

// // console.log(name1);


// const numb1 = 5;
// const numb2 = new Number(5);
// // console.log(numb2)

// const bool1 = true;
// const bool2 = new Boolean(true);
// // console.log(bool2);

// const getSum1 = function(x, y){
//   return x + y;
// }

// const john1 = {name: 'john'};
// const john2 = new Object({name: "john"})
// // console.log(john2);

// const arr1 = [1,2,3,4]
// const arr2 = new Array(1,2,3,4);
// console.log(arr1[2])

