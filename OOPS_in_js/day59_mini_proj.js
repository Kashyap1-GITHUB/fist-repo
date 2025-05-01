/*
class Library{
    constructor(){
        this.Books = []
    }
    
    AddBooks(Books){
        this.Books.push(...Books)
    }

    PrintAllBooks(){
        this.Books.forEach(function(book){
            console.log(book);
        })
    }
}

class books {
    constructor(bookName,Author,ReleaseDate,Pirce){
        this.bookName = bookName;
        this.Author = Author;
        this.ReleaseDate = ReleaseDate;
        this.Pirce = Pirce;
        this.readstatus = false
    }

    info(){
        console.log(`${this.readstatus ? "✅":"❌"} ${this.bookName} is written by ${this.Author} our book Releasedate ${this.ReleaseDate} and book price ${this.Pirce} you are ${this.readstatus ? "readded":"not readded"} this book`);
    }

    changereadstatus(){
    this.readstatus = ! this.readstatus
    }
}

let AhemdabatLibrary = new Library();
// AhemdabatLibrary.AddBooks("Ramayan");
// AhemdabatLibrary.AddBooks("MahaBharate");
AhemdabatLibrary.PrintAllBooks()


let b1 = new books("To Kill a Mockingbird"," Harper Lee", `July 11 1960`,3000)
let b2 = new books("1984","George Orwell", `June 8, 1949 `,4000)

AhemdabatLibrary.AddBooks([b1,b2])


AhemdabatLibrary.PrintAllBooks()

b1.changereadstatus()

b2.info()
*/



class MobileShope{
    constructor(){
        this.Mobile = [];
    }

    AddMobile(...Mobile){
        this.Mobile.push(...Mobile);
    }

    LishtMobile(){
        this.Mobile.forEach(function(Mobile){
            console.log(Mobile);
        })
    }
}

class Mobiles{
    constructor(brand,Modale,Price,Storege,bettery){
        this.brand = brand;
        this.Modale = Modale;
        this.Price = Price;
        this.Storege = Storege;
        this.bettery =bettery;
        this.sims = [];
    }

    getMobileInfo(){
        console.log(`${this.brand} - ${this.Modale} - ${this.Price} - ${this.Storege} - ${this.bettery} `);
    }

    insetsim(sim){
        if(this.sims.length === 2){
            console.log(`your limit only 2 `);
            returne
        }

        this.sims.push(sim);
    }
}

class Sim{
    constructor(sname,recharg){
        this.sname = sname;
        this.recharg = recharg;
    }

    addRecharge(Recharge){
        if(this.recharg < 0){
            console.log("Plz Enter valide amounte");
            returne
        }

        this.recharg += Recharge;
    }

    Recharge(){
        console.log(this.recharg);
        
    }
}

let mshope = new MobileShope();

mshope.AddMobile("sumsung")
mshope.AddMobile("Realme")
mshope.LishtMobile()

let m1 = new Mobiles("sumsung","s27 Ultra",1500000,"256GB","6000MAH")
let m2 = new Mobiles("Realme","Narzo 50",12000,"64GB","5000MAH")

m1.getMobileInfo()

mshope.AddMobile([m1,m2])
mshope.LishtMobile()

m1.insetsim(2)   


let s1 = new Sim("jio",2560);

s1.addRecharge(250);

s1.Recharge()