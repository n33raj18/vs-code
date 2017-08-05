"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UniversityLibrarian {
    assistCustomer(customer) {
        console.log(this.name + ' is assisting ' + customer);
    }
}
exports.UniversityLibrarian = UniversityLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating reference item');
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department is ${ReferenceItem.department}`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(publisher) {
        this._publisher = publisher;
    }
}
ReferenceItem.department = 'RESEARCH';
exports.ReferenceItem = ReferenceItem;
class Encyclopedia extends ReferenceItem {
    constructor(title, year, edition) {
        super(title, year);
        this.edition = edition;
    }
    printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} in the year ${this.year}`);
    }
    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}
exports.Encyclopedia = Encyclopedia;
//# sourceMappingURL=classes.js.map