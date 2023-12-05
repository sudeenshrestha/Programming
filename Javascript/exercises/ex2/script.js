var x = "*";

var y = 5;

var k = y

function pattern(x,y){
    for(var i=0; i<k; i++){
        j = x.repeat(y)
        console.log(j);
        y--;
    }

}

pattern(x,y)