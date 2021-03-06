import {Category} from './enums';
import {Book, DamageLogger, Person, Author, Librarian} from './interfaces';
import {UniversityLibrarian, ReferenceItem, Encyclopedia} from './classes'

function GetAllBooks(): Book[] {
	
	let books = [
		{ id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
		{ id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
		{ id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
		{ id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
	];
	
	return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
	
	let numberOfBooks: number = books.length;
	let firstAvailable: string = '';
		
	for(let currentBook of books) {
		
		if(currentBook.available) {
			firstAvailable = currentBook.title;
			break;
		}
	}
	
	console.log('Total Books: ' + numberOfBooks);
	console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
	
	console.log('Getting books in category: ' + Category[categoryFilter]);
	
	const allBooks = GetAllBooks();
	const filteredTitles: string[] = [];
	
	for(let currentBook of allBooks) {
		if(currentBook.category === categoryFilter) {
			filteredTitles.push(currentBook.title);
		}
	}
	
	return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
	
	for(let title of titles) {
		console.log(title);
	}
}

function GetBookByID(id: number) {
	const allBooks = GetAllBooks();
	return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
	return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
	console.log('Creating customer ' + name);
	
	if(age) {
		console.log('Age: ' + age);
	}
	
	if(city) {
		console.log('City: ' + city);
	}
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
	
	console.log('Checking out books for ' + customer);
	
	let booksCheckedOut: string[] = [];
	
	for(let id of bookIDs) {
		let book = GetBookByID(id);
		if (book.available) {
			booksCheckedOut.push(book.title);
		}
	}
	
	return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
	const allBooks = GetAllBooks();
	const foundTitles: string[] = [];
	
	if(typeof bookProperty == 'string') {
		// get all books by a particular author
		for(let book of allBooks) {
			if(book.author === bookProperty) {
				foundTitles.push(book.title);
			}
		}
	}
	
	else if(typeof bookProperty == 'boolean') {
		// get all books based on specified availability
		for(let book of allBooks) {
			if(book.available === bookProperty) {
				foundTitles.push(book.title);
			}
		}
	}
	return foundTitles;
}

function PrintBook(book: Book): void{
    console.log(book.title + ' by ' + book.author);
}

let myBook: Book = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: Category.Fiction,
    pages: 250,
    markDamaged: (reason: string) => { console.log('Damaged: ' + reason) }
};

PrintBook(myBook);
// myBook.markDamaged('torn pages');

// let logDamage: DamageLogger;
// logDamage = (reason: string) => console.log('Damage reported: ' + reason);
// logDamage('Coffee stains');

let favLibrarian: Librarian = new UniversityLibrarian;
favLibrarian.name = 'Nigam';
favLibrarian.assistCustomer('Neeraj');

// let ref = new ReferenceItem('Facts and Figures', 2016);
// ref.printItem();
// ref.publisher = 'Random Book Publisher';
// console.log(ref.publisher);

// let ref: ReferenceItem = new Encyclopedia('WorldPedia', 1989, 10);
// ref.printItem(); 
// ref.printCitation();

let Newspaper = class extends ReferenceItem {
    printCitation() {
        console.log(`${this.title}`);
    }
}

let myPaper = new Newspaper('The Hindu', 1910);
myPaper.printCitation();

class Novel extends class { title: string }{
    mainCharacter: string;
}

let myNovel = new Novel();
// myNovel.