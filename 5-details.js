//5
function printObjectDetails(obj) {
    for(let key in obj){

    if(obj.hasOwnProperty(key)){

        console.log(key + ": " + obj[key]);
    }
 
}
}
    let person ={
        name:"Mahmood",
        age:30,
        Occupation: "Pashto"

    };
       printObjectDetails(person);