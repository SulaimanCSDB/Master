//7
function person(firstname,lastname, age) {
    this.firstname = firstname;
    this.lastneme = lastname;
    this.age = age;
 }
    person.prototype.name = "Ahmad";
 
    let m1 = new person("Mahmood", "Rahmani", 28);
       console.log(m1.name);