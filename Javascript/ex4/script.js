var numbers = [1,2,3,4];

function looper(numbers){
    lst = [];
    for (var i=0; i<4; i++){
        num2 = numbers[i]*2;
    
        lst.push(num2)
    }
    return lst;
}

var output = looper(numbers);

console.log(output)
