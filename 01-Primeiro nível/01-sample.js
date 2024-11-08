function h(a) {
    return a.filter(num => num % 2 === 0);
}

let x = [1, 2, 3, 4, 5, 6];
let y = h(x);
console.log(y);
