"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const classes_1 = require("./classes");
function GetAllBooks() {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books = GetAllBooks()) {
    let numberOfBooks = books.length;
    let firstAvailable = '';
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter = enums_1.Category.Fiction) {
    console.log('Getting books in category: ' + enums_1.Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitles = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (let title of titles) {
        console.log(title);
    }
}
function GetBookByID(id) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function CheckoutBooks(customer, ...bookIDs) {
    console.log('Checking out books for ' + customer);
    let booksCheckedOut = [];
    for (let id of bookIDs) {
        let book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    const allBooks = GetAllBooks();
    const foundTitles = [];
    if (typeof bookProperty == 'string') {
        // get all books by a particular author
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        // get all books based on specified availability
        for (let book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
let myBook = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: enums_1.Category.Fiction,
    pages: 250,
    markDamaged: (reason) => { console.log('Damaged: ' + reason); }
};
PrintBook(myBook);
// myBook.markDamaged('torn pages');
// let logDamage: DamageLogger;
// logDamage = (reason: string) => console.log('Damage reported: ' + reason);
// logDamage('Coffee stains');
let favLibrarian = new classes_1.UniversityLibrarian;
favLibrarian.name = 'Nigam';
favLibrarian.assistCustomer('Neeraj');
// let ref = new ReferenceItem('Facts and Figures', 2016);
// ref.printItem();
// ref.publisher = 'Random Book Publisher';
// console.log(ref.publisher);
// let ref: ReferenceItem = new Encyclopedia('WorldPedia', 1989, 10);
// ref.printItem(); 
// ref.printCitation();
let Newspaper = class extends classes_1.ReferenceItem {
    printCitation() {
        console.log(`${this.title}`);
    }
};
let myPaper = new Newspaper('The Hindu', 1910);
myPaper.printCitation();
//# sourceMappingURL=app.js.map