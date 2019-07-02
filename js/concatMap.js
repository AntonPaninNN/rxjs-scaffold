import { interval, fromEvent } from 'rxjs';
import { concatMap, of } from 'rxjs/operators';
import { filter } from 'rxjs/internal/operators/filter';

export default function() {
    fromEvent(document, "click").pipe(
        filter(() => {
            console.log("click");
            return true;
        }),
        concatMap(() => interval(1000).take(7))
    ).subscribe((value) => {
        console.log(value);
    });
}