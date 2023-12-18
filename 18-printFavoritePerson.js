//18
var person = {
    id:1000,
    name: "Ahmad",
    favoriteBooks: [
    { id: 1, name: "JavaScript", pages: 456 },
    { id: 2, name: "React.Js", pages: 1320 }, 
 ],
 address: { country: "Afghanistan", province: "Herat", district: "Ghurian" },
 friends: [
   {
     id:1098,
     name: "karim",
     favoriteBooks: [
        { id: 1, name: "Css with Jone", pages: 444 },
        { id: 2, name: "React.Js", pages: 876 }
     ],
     address: {
        country: "Afghanistan",
        province: "Herat",
        district: "Kerokh",
     },
   },
   {
     id:1009,
     name: "Mahmood",
     favoriteBooks: [
        { id: 1, name: "Node.Js", pages: 765 },
        { id: 2, name: "Express", pages: 2234 }, 
     ],
     address: {
        country: "Afghanistan",
        province: "Herat",
        district: "Qozera",
      },
    },
  ],
};

   // console.log(person);

   for(let i = 0; i < person.favoriteBooks.length; i ++){

      console.log(person.favoriteBooks[i]);
   }
   
