# RxJs examples

## 1. Observable.create - create some observer for any logic:

```javascript
    Observable
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
```

<code> Next section: 33 </code><br>
<code> Next section: 66 </code><br>
<code> Next section: 99 </code><br>
<code> Completed section </code>

## 2. Observable.from - allows to create an observer from some iterable entity:

```javascript
    Observable
        .from([1, 2, 3, 4, 5])
        .subscribe((item) => {
            console.log("next: %s", item);
        }, (err) => {
            console.log("error: %s", err);
        }, () => {
            console.log("completed");
        });
```

<code> next: 1 </code><br>
<code> next: 2 </code><br>
<code> next: 3 </code><br>
<code> next: 4 </code><br>
<code> next: 5 </code><br>
<code> completed </code><br>

## 3. Observable.fromEvent - allows to create data source from events like click, mouse move, e.t.c:

```javascript
    Observable.fromEvent(window, 'click')
        .subscribe((item) => {
            console.log("Next: %s", item);
        }, (error) => {
            console.log("Error: %s", error);
        }, () => {
            console.log("Completed!");
        });
```

## 4. Observable.range - generate data source from some range interval:

```javascript
Observable.range(0, 10).subscribe((value) => {
        console.log('Next: %s', value);
    }, (err) => {
        console.log('Error: %s', err);
    }, () => {
        console.log('Completed!');
    });
```

<code> next: 1 </code><br>
<code> next: 2 </code><br>
<code> next: 3 </code><br>
<code> next: 4 </code><br>
<code> next: 5 </code><br>
<code> next: 6 </code><br>
<code> next: 7 </code><br>
<code> next: 8 </code><br>
<code> next: 9 </code><br>
<code> next: 10 </code><br>
<code> completed </code><br>

## 5. Observable.interval().timeInterval().take() - this pipe generates some data in some time interval:

```javascript
Observable.interval(2000).timeInterval().take(10).subscribe((value) => {
        console.log(value);
    }, (err) => {
        console.log('Error: %s', err);
    }, () => {
        console.log('Completed!');
    });
```

<code>{value: 0, interval: 2000}</code><br>
<code>{value: 1, interval: 2001}</code><br>
<code>{value: 2, interval: 2000}</code><br>
<code>{value: 3, interval: 2004}</code><br>
<code>{value: 4, interval: 1996}</code><br>
<code>{value: 5, interval: 2000}</code><br>
<code>{value: 6, interval: 2000}</code><br>
<code>{value: 7, interval: 2000}</code><br>
<code>{value: 8, interval: 2005}</code><br>
<code>{value: 9, interval: 1995}</code><br>
<code>Completed!</code><br>