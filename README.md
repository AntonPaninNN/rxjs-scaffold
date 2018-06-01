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