
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice



var students = ["Oliver", "Junior", "Jose"];
var badStudents = [];

badStudents.push(students[0]);
//badStudents.pop(students[0]);

var index = badStudents.indexOf("Oliver");

if(index > -1){
    badStudents.splice(index, 1);    
}

console.log(badStudents);