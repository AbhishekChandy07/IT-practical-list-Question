function pet(name, age, weight, type){
    this.name=name;
    this.age=age;
    this.weight=weight;
    this.type=type;
}
var arr = document.getElementById("petData");
var p1={};

function display(){
    for(var i = 0; i < arr.length; i++){
        p1[arr[i].name] = arr[i].value;
    }
    console.log(JSON.stringify(p1));
}