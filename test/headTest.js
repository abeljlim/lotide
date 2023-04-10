const head = require('../head');
const assertEqual = require('../assertEqual'); // Why doesn't the code already run so the function is already declared?

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["The only element"]), "The only element");
assertEqual(head([]), undefined);
assertEqual(head("Not an array...or am I? Aren't strings static arrays? Nope, they're array-likes"), undefined);
assertEqual(head(17), undefined);