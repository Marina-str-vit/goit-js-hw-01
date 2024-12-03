/****
 * 6 розділ
 *
 *
 */

// function foo() {

// }
// foo()

// const foo = () => {
//   console.log("this", this);
// }
// foo() //завжді посилаеться на

/***
// контекст методів об`єкта
*/

// const user = {
//   userName: "Alsce",
// //   showThis(){
// // console.log("this", this);
// //   }

// }
// user.showThis() // this {userName...showThis..}

/***
//для прикладу
*/

// const user = {
//   userName: "Alsce",
// showThis: () => {
//   console.log("this", this); //
// }
// }
// user.showThis()

/***
//контекст методу об'єкта але оголошена як зовнішна
*/

// function showThis() {
//   console.log("this", this);
// }

// showThis() //

// function showThis() {
//   console.log("this", this);
// }
// const user = {
//   userName: "Kate",
// }
// user.showUserThis = showThis;

// user.showUserThis() // this {"userName": "Kate", showThis: f }

/**
// виклик без контексту але оголошенній як медот обїєкта
*/

// const user = {
//     userName: "Petya",
//     showThis(){
//       console.log("this", this);
//       console.log("userName", this.userName);
//     }
//   }
// // console.log(user);// {userName: "Petya", showThis: f}

//   const foo = user.showThis();
// console.log(foo()); //  this {userName: 'Petya', showThis: ƒ} userName Petya

// // не суворий режим, в суворому режимі < type="module">  буде underfind
// foo(); // window ===>> тому що зліва нічого не має і це несуворий режим

/***
//контекст у callback-функціях
*/

// const user = {
//     userName: "Alice",
//     showThis(){
//       console.log("this", this);
//       console.log("userName", this.userName);
//     }
//   }

//   function logger(callback) {
//     // console.log(callback);
//     callback(); // нема об'єкту немає результату!! зліва від фукції пусто, тому буде Window
//   }

//   logger(user.showThis);

//---------------------------

// const book = {
//   title: "React",
//   showThis(){
//     console.log("this", this);
//   },
//     showTitle() {
//       console.log("title", this.title);
//     },
// }

// //book.showThis()

// const foo1 = book.showThis;
// console.log(foo1); // посилання на функцію this

// foo1(); // this нічого не має тому буде Window
// const foo2 = book.showTitle;
// foo2();

/***
 *
 *
 */

// function showThis(){
//       console.log("this", this);
//     }

//     const objA = {
//       a: 5,
//       b: 10
//     }
//     const objB = {
//       x: 100,
//       y: 150
//     }

// showThis.call(objA); // objA {      a: 5,   b: 10    }
// function showThis(a, b, arr){
//   console.log(a, b, arr);

//   console.log("this", this);
// }

// const objA = {
//   a: 5,
//   b: 10
// }
// const objB = {
//   x: 100,
//   y: 150
// }
// const str = "lalala"
// showThis.call(objA, 5, str, [1, 2, 3]) //метод прив'язує контекст до функції, контекстотм буде перший аргумент і до

/**
 * коли аргументиб які потрібно перебрати лежать у функціі
 */
// showThis.apply(objB, [10, "hohoho", [5, 10, 15]]); //різниці в передачі аргументів!! повинні передавати у вігляді массивів

/**
 * ----------------------
 */

// function changeColor(color) {
//   console.log("this", this);
//   this.color = color;
// }
//   const hat = {
//     color: "black"
//   }

//   const sweater = {
//     color: "green"
//   }
//   // changeColor.call(hat, "red");
//   // console.log("hat", hat);

//   changeColor.apply(sweater, ["blue"]); //взяли к квадратні скобки тому що це маси повинен бути!!
//    console.log(sweater);

/**
 *  BIND повертає копію функції з прив'язаним до неї контекстом
 */
//  function changeColor(color) {
//   console.log("this", this);
//   this.color = color;
// }
//   const hat = {
//     color: "black"
//   }

//   const sweater = {
//     color: "green"
//   }
//  const changeHatColor = changeColor.bind(hat); //він поки лише прив'язав об'єкт і збереже функцію з привязіним контекстом
//  changeHatColor("red");

// console.log(hat);

// const changeSweaterColor = changeColor.bind(sweater, "lalal")
// changeSweaterColor();
// console.log(sweater);

/***перевірити тому що різні значення з уроком
 * --------------
 */

// const counter = {
//   num: 0,
//   increment(num) {
//     console.log("increment", this);
//     this.value += num;
//   },
//   decrement(num) {
//     console.log("decrement", this);
//     this.value -= num;
//   }
// }

// function updateCounter(value, callback) {//cal = counter.increment
//   // console.log(callback);
//   callback(value); // зліва немає об'єкта на який вона може ссилатся, тому нічого не буде
// }

// // updateCounter(10, counter.increment);

// console.log(counter);

// // щоб щось працювало, треба викликати метод bind

// updateCounter(10, counter.increment.bind(counter));
// console.log(counter);

// updateCounter(1, counter.decrement.bind(counter));
// console.log(counter);

/**
 *
 * прототипи
 */

// const animal = {

// }

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "38001234567,38001112233,380055566377,380055566300";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");
// const namesArrtt = namesArr.join(",");
// const phonesArrtt = phonesArr.join(",");

// // for(let i = 0; i < namesArr.length; i++) {
// //     console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// // }

// console.log(namesArr);
// console.log(phonesArr);
// console.log(namesArrtt);
// console.log(phonesArrtt);

// const values = [2, 17, 94, 1, -23, 37];
// let min;

// for(let i = 0; i < values.length; i++) {
//     if(i === 0) {
//         min = values[i];
//     } else if(values[i] < min) {
//         min = values[i]
//     }
// }

// console.log(min);
/**
 * Напиши функцию calcBMI(weight, height) 
 * которая рассчитывает и возвращает индекс массы тела человека. 
 * Для этого необходимо разделить вес в киллограммах на квадрат 
 * высоты человека в метрах.

Вес и высота будут специально переданы как строки. 
Нецелые числа могут быть заданы в виде 24.7 или 24,7, 
то есть в качестве разделителя дробной части может быть запятая.

Индекс массы тела необходимо округлить до одной цифры после запятой;
 */
const bmi = calcBMI("88,3", "1.75");

console.log(bmi); // 28.8
