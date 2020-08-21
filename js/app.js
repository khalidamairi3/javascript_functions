console.log(first_function (2,1));
console.log(first_function (12,8));
console.log(first_function (3,7));


console.log(second_function("innotech"));//8
console.log(second_function("innotech-college"));//16
console.log(second_function("khaled"));//6


console.log(third_function(["innotech","photo"]));
console.log(third_function(["camera","bike","jaket","phone","table"]));
console.log(third_function(["history","biology","philosophy","english","math","physics"]));





function first_function (num1,num2){
    var sum =num1+num2;
    var result = sum*5;
    return result;
}

function second_function(string){
    return string.length > 10;
}

function third_function(array){
    
    var ph_strings=array.filter(string =>string.startsWith("ph"))
    return ph_strings[0];
}



