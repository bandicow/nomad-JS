// const names = prompt ('이름 입력');
// alert ("어 어서오고 " + names);


// const names = prompt ('이름 입력');
// alert (`어 어서오고 ${names}`);

// const names = prompt ('예약일',"2022-10-");

// const isAdult = confirm('당신은 둘리입니까');
// console.log (isAdult);

// console.log (
// String(3),
// String(true),
// String(false),
// String(null),
// String(undefined)
// );


// console.log (
//     Number("1234"),
//     Number("1232akd"),
//     Number("1"),
//     Number("0")
//     );

// console.log (
//     Boolean(0),
//     Boolean('0'),
//     Boolean(""),
//     Boolean(" ")
//     )


// const a=1;
// const b="1";
// console.log (a === b);


// let age = 19;

// if (age>19) {
//     console.log ("성인")
// } else if (age===19) {
//     console.log ("수능 보겠네?")
// }
// else {
//     console.log ("미성년자")
// }

// const age = prompt('혹시 나이가..?');
// const isAge = age > 19;

// if(!isAge) {
//     console.log ('잼민이 컷')
// }

// const gender = "F";
// const names = "jane";
// const isAdult = true;

// // if (gender==="M" && names ==="Mike" || isAdult)1
//  if (gender==="M" && (names ==="Mike" || isAdult)) { 
//     console.log ('통과')
// } else {
//     console.log("꺼져")
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`${i}`)
// };

// let i = 0;

// while (i <10) {
//     console.log(i)
//     i++;
// }

// let i = 0;

// do {
//     console.log(i)
//     i++;
// } while (i < 10);

// while (true) {
//     let answer = confirm("끝..내..ㅈ");
//     if(!answer){
//         break;
//     }
// }

// for (let i = 0; i < 10; i++) {
//     if (i%2){
//         continue;
//     }
//     console.log(i)
// }


// let won = prompt("얼마짜리?")

// switch (won) {
//     case '100' : 
//     console.log("백원");
//     break;
//     case '500' : 
//     console.log("오백원");
//     break;
//     case '1000' :
//     case "1달러" : 
//     console.log("천원");
//     break;
//     case '5000' :
//     console.log("오천원");
//     break;
//     case '10000' :
//     console.log("만원");
//     break;
//     default :
//     console.log("백원부터 만원 사이만");
// };


// function showError(){
//     alert('Error');
// }
// showError()

// let msg="HI";

// function sayHello(names){
//     let msg = "Hello ";
//     if(names){
//         msg += names;
//     }
//     console.log(msg);
// }

// sayHello('world');
// console.log(msg);


// function sayHello(names){
//     let newname = names || "friend";
//     let msg = `Hello ${newname}`;
//     console.log(msg);
//     }

// sayHello();
// sayHello('world');

// function sayHello(names = "friend"){
//     let msg = `Hello ${names}`;
//     console.log(msg);
//     }

// sayHello();
// sayHello('world');

// function add(num1,num2) {
//     return num1 + num2;
// }

// const result = add(2,1);

// console.log(result);

// function showError(){
//     alert('에러임')
//     return;
//     alert('return때문에 이 코드는 실행 절대 안됨')
// }
// const result = showError();
// console.log(result);


// const superman = {
//     name:'clack',
//     age: 30,
// }
// console.log(superman.name);
// console.log(superman['age']);
// superman.gender = 'male';
// superman['height'] = "190cm";
// delete superman.age;
// console.log(superman);

// function makeObject(name,age) {
//     return {
//         name,
//         age,
//         hobby:"football",
//     };
// }

// const Mike = makeObject("Mike",30);
// console.log(Mike);

// console.log(Mike.birthday);
// console.log("age" in Mike);
// console.log("job" in Mike);


// function isAdult(user) {
//     if (!("age" in user)|| //
//         user.age <20) {
//         return false;
// }
//     return true;
// }

// const Jun = {
//     name:'JUN',
//     age: 27,
// }

// const Kim = {
//     name:'KIM',
//     age: 17,
// }

// const Hyeok = {
//     name:'Hyeok',
// }

// console.log(isAdult(Jun));
// console.log(isAdult(Kim));
// console.log(isAdult(Hyeok));


// const Jun = {
//     name:'JUN',
//     age: 27,
// }

// for (x in Jun) {  
//     console.log(Jun[x]);
// }

// const superman = {
//     name:'clack',
//     age: 30,
//     fly(){
//         console.log('쓩~~ 날아간다!');
//     }
// }
// superman.fly()

// let boy = {
//     name:'Mike',
//     showname() {
//         console.log(this.name);
//     }
// };

// let man=boy;
// boy=null;

// man.showname();


// let boy = {
//     name:'Mike',
//     sayThis() {
//         console.log(this);
//     }
// };

// boy.sayThis();

let days = ['월','화,','수'];

days[1]='화요일';
days.push('목');
days.unshift('토','일');
days.pop();

console.log(days);
console.log(days.length);

for(let index=0; index < days.length; index++) {
    console.log(days[index])
}

for(let day of days){
    console.log(day)
}

