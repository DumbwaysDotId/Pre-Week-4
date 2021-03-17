function Student(){
    this.name =  "Oji";
    this.gender = "Men";
}

Student.prototype.age = 15

var protoModif = new Student();
alert(protoModif.age) //15


var protoModif2 = new Student();
alert(protoModif2.age)//15