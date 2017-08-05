import {Book, DamageLogger, Author, Librarian} from './interfaces'

class UniversityLibrarian implements Librarian{

    name: string;
    email: string;
    department: string;
    assistCustomer(customer: string) {
        console.log(this.name + ' is assisting ' + customer);
    }

}

abstract class ReferenceItem {

    private _publisher: string;
    static department: string = 'RESEARCH';

    constructor(protected title: string, protected year: number){
        console.log('Creating reference item');
    }
    
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department is ${ReferenceItem.department}`);
    }

    get publisher(): string{
        return this._publisher.toUpperCase();        
    }
    set publisher(publisher: string){
        this._publisher = publisher;
    }
    abstract printCitation(): void; 
}

class Encyclopedia extends ReferenceItem {

    constructor(title: string, year: number, private edition: number) {
        super(title, year);
    }

    printItem(): void{
        super.printItem();
        console.log(`Edition: ${this.edition} in the year ${this.year}`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }
}

export {UniversityLibrarian, ReferenceItem, Encyclopedia}