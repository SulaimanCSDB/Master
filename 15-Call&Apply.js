//15
const p1 ={
    name: "Ahmad",
    age: 25,
    info(){
       console.log(`My name is ${this.name}, I am ${this.age} years old.`);
    },

    setName: function(name){
       this.name = name;
    }
};
   p1.info();

   const p2 ={

    name:"Rahim",
    age: 64
   }
   p1.info.call(p2);
   p1.info.apply(p2);