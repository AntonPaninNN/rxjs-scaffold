import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import "rxjs/add/operator/timeInterval";
import "rxjs/add/operator/take";

export default function() {
    return Observable.interval(2000).timeInterval().take(10).subscribe((value) => {
        console.log(value);
    }, (err) => {
        console.log('Error: %s', err);
    }, () => {
        console.log('Completed!');
    });
}