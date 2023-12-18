//19
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
   
    console.log(person.friends[0].favoriteBooks[0]);
    console.log(person.friends[0].favoriteBooks[1]);
    console.log(person.friends[1].favoriteBooks[0]);
    console.log(person.friends[1].favoriteBooks[1]);
