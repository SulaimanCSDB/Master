//13
function countPropertis(obj) {
    return Object.keys(obj).length;
    
}

const person ={
    name: "ahmad",
    lastName: "Rahimi",
    age: 26

}

    console.log(countPropertis(person));