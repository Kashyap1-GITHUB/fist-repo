// function Toffie(name){
//     this.name = name
//    this.printmyname = function(){
//     console.log(this.name);
//    }
// }
// Toffie.prototype.price = 10;

// let t1 = new Toffie("coko")
// let t2 = new Toffie("Bnana")
// console.log(t1);
// console.log(t2);

function Employee(name,id,salory){
this.name = name
this.id = id
this.salory = salory
}

Employee.prototype.MyDatailes = function(){
    console.log(`my name is ${this.name} and my id ${this.id} my carentaly salary ${this.salory}`);
}
let e1 = new Employee("kashyap",23452,50000)