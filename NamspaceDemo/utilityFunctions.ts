namespace Utility {

    export namespace Fees {
        export function CalculateLateFees(noOfDays: number){
            return noOfDays * 0.25;
        }
    }

    export function MaxBooksAllowed(age: number) {
        if(age < 12){
            return 3;
        }else {
            return 10;
        }
    }

}