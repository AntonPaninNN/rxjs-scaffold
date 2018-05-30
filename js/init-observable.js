import { Observable } from 'rxjs/Observable';

export default function () {
    return Observable
        .create((observer) => {
            observer.next('33');
            observer.next('66');
            observer.next('99');
            observer.complete();
        })
        .subscribe((item) => {
            console.log("Next section: %s", item);
        }, (err) => {
            console.log("Error section: %s", err);
        }, () => {
            console.log("Completed section");
        });
}