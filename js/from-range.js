import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';

export default function() {
    return Observable.range(0, 10).subscribe((value) => {
        console.log('Next: %s', value);
    }, (err) => {
        console.log('Error: %s', err);
    }, () => {
        console.log('Completed!');
    });
}