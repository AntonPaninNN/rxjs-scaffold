import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export default function() {
    fromEvent(document, 'click')
  .pipe(
    switchMap(() => interval(1000))
  )
  .subscribe(console.log);
}