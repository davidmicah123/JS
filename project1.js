'use strict';


let students = [
    {
        name: 'john',
        score1: 47,
        score2: 23,
    },
    {
        name: 'Blob',
        score1: 24,
        score2: 25,
    },
     {
        name: 'nick',
        score1: 40,
        score2: 35,
    },
    {
        name: 'alex',
        score1: 44,
        score2: 45,
    },
];


let degree = ['A', 'B', 'C', 'D', 'E'];

let passing_limit = [91, 81, 71, 61, 51];


function total(score1, score2){
    let total_score = score1 + score2;

    return total_score;
}


function calcFinal(){
     
    for(let i = 0; i < students.length; i++) {
        students[i].total_score = total(students[i].score1, students[i].score2);

        if(students[i].total_score >= 51){
            console.log(students[i].name + " has passed the exam successfully");

            for(let x = 0; x < passing_limit.length; x++){
                if (students[i].total_score >= passing_limit[x]){
                    console.log("HE has " + students[i].total_score + " points and he got diploma with degree " + degree[x]);

                    console.log('--------------------');
                    break;
                }
            }

        }else{
            console.log(students[i].name + " got " + students[i].total_score + " points, has failed and has to try next year");
            console.log('-------------------------');

        }

    }


}

calcFinal();
