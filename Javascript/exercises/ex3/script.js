var fruits = [
    { id: 1, name: "apple", color: "red" },
    { id: 2, name: "banana", color: "yellow" }
    ];

    for (a=0; a<fruits.length; a++){
        var fruits0 = fruits[a]
        console.log(fruits0)

        var keyss = Object.keys(fruits0)
        console.log(keyss)

        for (var i=0;i<keyss.length;i++){
            var key = keyss[i];
            console.log(key);
            console.log(fruits0[key]);
        }
    }

function searchById(fruits, id){
    var id;
    if (id === 1){
        return fruits[0];
    }
}

searchById(fruits, 1)