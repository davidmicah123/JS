'use strict';
const johns_score = 80,
      nicks_score = 75;

const lower_limit = 51;

if (johns_score > lower_limit && nicks_score > lower_limit){
    console.log(`Both students passed the exam, Johns score is ${johns_score} Nick's score is ${nicks_score}`);
}else if (johns_score >= lower_limit && nicks_score < lower_limit){
    console.log("only one student passed he exam");
}else if (nicks_score >= lower_limit && johns_score < lower_limit){
    console.log("only one student passed he exam");
}else {
    console.log('Both student failed the exam');
}


if (johns_score >= lower_limit && nicks_score < lower_limit){
    console.log(`John has passed the exam with a score of ${johns_score}`);
}else if (nicks_score >= lower_limit && johns_score < lower_limit){
    console.log(`Nick has passed the exam with a score of ${nicks_score}`);
}

console.log("");

function passExam(name, score){
    const uniPass = 70;
    const schoolPass = 50;

    if (score >= uniPass){
        console.log(name  +  ' has passed the university level exam with an average of ' + score);
    }else if (score >= schoolPass){
        console.log(name + ' has passed the school level exam with an average of ' + score);
    }else{
        console.log(name + ' has failed the exam ');
    }

    
}
function calcScore(testScore, examScore) {
    const score = testScore + examScore;

    return score;
}

passExam('david', calcScore(22, 74));
passExam('bola', calcScore(17, 67));
passExam('jide', calcScore(27, 55));
passExam('sola', calcScore(10, 70));
passExam('femi', calcScore(0, 65));



console.log('');

function calcAge(birthyear, currentyear){
    const age = currentyear - birthyear;
    console.log("your age is " + age);
    return age;
}
calcAge(2007, 2022);



//function expression
var sum = function(a, b){
   console.log( a+b);
}
sum(10, 15);

const arr = [
    'victor',
    2,
    4,
    5,
    [7, 8, 9],
    'dad',
    function(name){
        return("hello " + name);
    }
];
console.log(arr[0]);
console.log(arr[6](arr[0]));

let person = new Object();

person.firstName = 'david';
person.age = 15;
person.firstName = 'Favour';


person['job'] = 'programmer';
person['best friend'] = 'MJ';
// person.friends = new object();
// person.friends.friend1 = 'desmond';
console.log(person);


let MJ = {
    firatName: 'alexa',
    lastName: 'dawin',
    daughter: {
        name: 'JONAS',
        dog: 'rex'
    },
    age: '12',
    myFun: function(par){
        console.log(par.daughterName + " is the daughter of " + par.fatherName + " and is " + par.daughterAge + " years old");
    }
};

console.log(MJ);

MJ.myFun({daughterName: 'jessy', fatherName: 'michael', daughterAge: 5});


console.log("");

const proples = ['sola', 'bola', 'fela', 'tolani'];

for(let i = 0; i < proples.length; i++){
    if (proples[i] === 'fela'){
        console.log(proples[i] + ' is my brother');
        continue;
    }
}

console.log(proples);

let i = 0;
while(i<=10){
    console.log(i);
    i++
}