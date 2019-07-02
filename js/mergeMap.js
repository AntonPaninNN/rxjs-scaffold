import { interval, fromEvent } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { filter } from 'rxjs/internal/operators/filter';

export default function() {
    fromEvent(document, "click").pipe(
        mergeMap(() => interval(1000)),
        filter((value) => value % 2 === 0)
    ).subscribe((value) => {
        console.log(value);
    });
}