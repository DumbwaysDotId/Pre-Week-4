function Student(){
    this.name = "Jhon Snow";
    this.gender = "Men"
}

var studObj = new Student()

console.log(Student.prototype) //Obj
console.log(studObj.prototype) //Undifine
console.log(studObj.__proto__) //Obj

console.log(typeof Student.prototype) //Obj
console.log(typeof studObj.__proto__) //Obj

console.log(Student.prototype === studObj.__proto__) //true