# RxJs examples

## 1. Observable.create - create some observer for any logic.

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