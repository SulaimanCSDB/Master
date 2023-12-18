//9
class Book{

    constructor(title, author){

    this.title = title;
    this.author = author;
    }

    displaydetaile(){

        console.log("Title:", this.title);
        console.log("Author:", this.author);
        
        }
    
}

    const m1 = new Book("FiqahAkbar", "imam AbuAnifa");
    m1.displaydetaile();