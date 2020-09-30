function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


// För att testa ES/Babel
const names = [
    'Malin',
    'Filip',
    'Rizvan',
    'Agnes'
];

console.log(names.map(names => names.length));