import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';

export default function() {
    return Observable.fromEvent(window, 'click')
        .subscribe((item) => {
            console.log("Next: %s", item);
        }, (error) => {
            console.log("Error: %s", error);
        }, () => {
            console.log("Completed!");
        });
}