import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/from';

export default function () {
    return Observable
        .from([1, 2, 3, 4, 5])
        .subscribe((item) => {
            console.log("next: %s", item);
        }, (err) => {
            console.log("error: %s", err);
        }, () => {
            console.log("completed");
        });
}