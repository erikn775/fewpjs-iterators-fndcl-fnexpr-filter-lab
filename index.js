// Code your solution here
let names;
function findMatching(drivers, string ) {
    names = drivers.filter(x => { return x.toLowerCase() == string.toLowerCase()})
    return names
}

let names2;
function fuzzyMatch(drivers, string) {
    names2 = drivers.filter(x => {return x.startsWith(string[0])})
    return names2
}

let names3;
function matchName(drivers, string) {
    names3 = drivers.filter(x => {return x.name == string})
    return names3
}