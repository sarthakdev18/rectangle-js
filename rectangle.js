function areaRectangle(a, b) {
    let area = a * b;
    return area;
}

function perimeterRectangle(a, b) {
    let perimeter = 2 * (a + b);
    return perimeter;
}

let a = 12;
let b = 17;
console.log("Area of Rectangle is: " + areaRectangle(a, b));
console.log("Perimeter of Recatangle is: " + perimeterRectangle(a, b));
